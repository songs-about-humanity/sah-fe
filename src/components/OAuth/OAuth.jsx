import React from 'react';

export const OAuth = () => {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const scopes = [
    'streaming',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-playback-state',
  ];

  return (
    <div>
      <button
        className="auth-button"
        onClick={() => window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}
      >
            Login to Spotify
      </button>
    </div>
  );
};
