import React, { useState, useEffect } from 'react';
import { useSocketSelector } from 'react-socket-io-hooks';
 
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


// let spotifyApi = new SpotifyWebApi();
// spotifyApi.setAccessToken(_token);
// spotifyApi
//   .getUserPlaylists() // note that we don't pass a user id
//   .then(
//     function(data) {
//       console.log('User playlists', data);
//     },
//     function(err) {
//       console.error(err);
//     }
//   );

// spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//   function(data) {
//     console.log('Artist albums', data);
//   },
//   function(err) {
//     console.error(err);
//   }
// );

// spotifyApi.getMyDevices().then(
//   function(data) {
//     console.log('devices', data);
//   },
//   function(err) {
//     console.error(err);
//   }
// );

// console.log('device id', spotifyApi.device_id);

export default function SpotifyPlayer() {
  const [deviceId, setDeviceId] = useState('');
  const [spotifyReady, setSpotifyReady] = useState(false);
  const { token } = useSocketSelector(state => state);


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

  return (<div>
    {/* <button 
      onClick={() => window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}
    >
          Login to Spotify
    </button> */}
    <button onClick={() => play(deviceId, token)}>Play</button>
    <img id="current-track"/>
    <h3 id="current-track-name"></h3> 
  </div>);
}
