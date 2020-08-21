import React from 'react'

export const OAuth = () => {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = 'http://localhost:7891/create';
  const scopes = [
    'streaming',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-playback-state',
  ];

  return (
    <div>
      <button 
        onClick={() => window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}
      >
            Login to Spotify
      </button>
    </div>
  );
};
