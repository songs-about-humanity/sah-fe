import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSocket, useSocketSelector } from 'react-socket-io-hooks';
 
// Play a specified track on the Web Playback SDK's device ID
function play(device_id, _token) {
  $.ajax({
    url: 'https://api.spotify.com/v1/me/player/play?device_id=' + device_id,
    type: 'PUT',
    data: '{"uris": ["spotify:track:5ya2gsaIhTkAuWYEMB0nw5"]}',
    beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token);},
    success: function(data) { 
      console.log(data);
    }
    
  });
}

export default function SpotifyPlayer() {
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

  socket.on('PLAY_ALL', () => {
    play(deviceId, token);
  });

  return (<div>
    <button disabled={!deviceId} onClick={() => socket.emit('PLAY', room_id)}>Play</button>
    <img id="current-track"/>
    <h3 id="current-track-name"></h3> 
  </div>);
}
