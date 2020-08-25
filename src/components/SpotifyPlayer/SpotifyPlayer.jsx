import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSocket, useSocketSelector } from 'react-socket-io-hooks';
 
// Play a specified track on the Web Playback SDK's device ID
function play(device_id, _token, uri) {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id,
    type: 'PUT',
    data: `{"uris": ["${uri}"]}`,
    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token);},
    success: function(data) { 
      console.log(data);
    }
    
  });
}

export default function SpotifyPlayer({ queue }) {
  const socket = useSocket();
  const { room_id } = useSocketSelector(state => state);
  const [deviceId, setDeviceId] = useState('');
  const [spotifyReady, setSpotifyReady] = useState(false);
  const { token } = useSelector(state => state);


  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log('we made it into the first useEffect');
      setSpotifyReady(true);
    };
    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    if(!spotifyReady) return;  
    
    const player = new Spotify.Player({
      name: 'Web Playback SDK Template',
      getOAuthToken: cb => { cb(token); }
    });
    // Error handling
    player.on('initialization_error', e => console.error(e));
    player.on('authentication_error', e => console.error(e));
    player.on('account_error', e => console.error(e));
    player.on('playback_error', e => console.error(e));

    // Playback status updates
    player.addListener('player_state_changed', state => {
      console.log(state);
      $('#current-track').attr('src', state.track_window.current_track.album.images[0].url);
      $('#current-track-name').text(state.track_window.current_track.name);
    });

    // Ready
    player.addListener('ready', data => {
      console.log('Ready with Device ID', data.device_id);
      
      // Play a track using our new device ID
      // _deviceId = data.device_id;
      setDeviceId(data.device_id);
    });

    // Connect to the player!
    player.connect();

    return () => {
      player.removeListener('initialization_error');
      player.removeListener('authentication_error');
      player.removeListener('account_error');
      player.removeListener('playback_error');
      player.removeListener('player_state_changed');
      player.removeListener('ready');
      player.disconnect();
    };
  }, [spotifyReady, token]);

  const handleClick = (uri) => {
    console.log('clicked play for ' + uri + ' in room ' + room_id);
    socket.emit('PLAY', { room_id, uri });
  };

  socket.on('PLAY_SONG', (uri) => {
    play(deviceId, token, uri);
  });

  return (<div>
    {
      queue.map((queueItem, i) => {
        const { participant, uri } = queueItem;
        return <>
          <p>{uri}</p>
          <p>chosen by {participant}</p>
          <button
            key={i}
            disabled={!deviceId}
            onClick={() => handleClick(uri)}>
              Play
          </button>
        </>;
      })
    }
    <img id="current-track"/>
    <h3 id="current-track-name"></h3> 
  </div>);
}
