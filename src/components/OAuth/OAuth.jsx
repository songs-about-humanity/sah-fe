import React from 'react';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = process.env.SPOTIFY_CLIENT_ID;


const scopes = [
  'streaming',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-playback-state',
];

export const spotifyRedirectLogin = (redirectUri) => {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
}; 

export const OAuth = () => {
  const redirectUriToHome = process.env.SPOTIFY_REDIRECT_URI;
  return (
    <div>
      <button 
        onClick={() => spotifyRedirectLogin(redirectUriToHome)}
      >
            Login to Spotify
      </button>
    </div>
  );
};
