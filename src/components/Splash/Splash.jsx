import React from 'react';
import { OAuth } from '../OAuth/OAuth';

export const Splash = () => {
  return (
    <div>
      Login to Spotify here:
      <OAuth />
    </div>
  );
};


export default Splash;
