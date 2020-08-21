import React, { useState, useEffect } from 'react';
import * as SpotifyWebApi from 'spotify-web-api-js';
 
// const hash = window.location.hash
//   .substring(1)
//   .split('&')
//   .reduce(function(initial, item) {
//     if(item) {
//       var parts = item.split('=');
//       initial[parts[0]] = decodeURIComponent(parts[1]);
//     }
//     return initial;
//   }, {});

// // this gets rid of the hash from url so it looks pretty again
// window.location.hash = '';

// let _token = hash.access_token;
// console.log(_token);

// export const authEndpoint = 'https://accounts.spotify.com/authorize';
// const clientId = process.env.SPOTIFY_CLIENT_ID;
// const redirectUri = 'http://localhost:7891/room';
// const scopes = [
//   'streaming',
//   'user-modify-playback-state',
//   'user-read-currently-playing',
//   'user-read-playback-state',
// ];

// if (!_token) {
//   window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
// }

// Set up the Web Playback SDK


const player = (setState) => {
  window.onSpotifyPlayerAPIReady = () => {
    const player = new Spotify.Player({
      name: 'Web Playback SDK Template',
      getOAuthToken: cb => { cb(_token); }
    });

    // Error handling
    player.on('initialization_error', e => console.error(e));
    player.on('authentication_error', e => console.error(e));
    player.on('account_error', e => console.error(e));
    player.on('playback_error', e => console.error(e));

    // Playback status updates
    player.on('player_state_changed', state => {
      console.log(state)
      $('#current-track').attr('src', state.track_window.current_track.album.images[0].url);
      $('#current-track-name').text(state.track_window.current_track.name);
    });

    // Ready
    player.on('ready', data => {
      console.log('Ready with Device ID', data.device_id);
      
      // Play a track using our new device ID
      // _deviceId = data.device_id;
      setState(data.device_id);
    });

    // Connect to the player!
    player.connect();
  };
};

// Play a specified track on the Web Playback SDK's device ID
function play(device_id) {
  $.ajax({
   url: "https://api.spotify.com/v1/me/player/play?device_id=" + device_id,
   type: "PUT",
   data: '{"uris": ["spotify:track:5ya2gsaIhTkAuWYEMB0nw5"]}',
   beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Bearer ' + _token );},
   success: function(data) { 
     console.log(data)
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

  player(setDeviceId);

  return (<div>
    {/* <button 
      onClick={() => window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}
    >
          Login to Spotify
    </button> */}
    <button onClick={() => play(deviceId)}>Play</button>
    <img id="current-track"/>
    <h3 id="current-track-name"></h3> 
  </div>);
}
