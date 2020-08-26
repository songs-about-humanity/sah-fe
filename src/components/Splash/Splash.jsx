import React from 'react';
import { OAuth } from '../OAuth/OAuth';
import './Splash.css';

export const Splash = () => {
  return (
    <div className="splash-container">
      <div className="header-container">
        <h1 className="title-header">Songs Against Humanity</h1>   
        <OAuth />
      </div>
   
    </div>
  );
};


export default Splash;
