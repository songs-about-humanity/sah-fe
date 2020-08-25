import React from 'react'
import { OAuth } from '../OAuth/OAuth';

const Splash = () => {
  return (
    <>
      <h1>Songs Against Humanity</h1>
      <p>
        Log in to Spotify to get started!
      </p>
      <OAuth />
    </>
  );
};

export default Splash;
