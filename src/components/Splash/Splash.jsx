import React from 'react';
import { OAuth } from '../OAuth/OAuth';
import './Splash.css';
import logo from '../../../public/assets/SAH_transparent.svg';
 
export const Splash = () => {
  return (
    <div className="splash-container">
      <div className="header-container">
        <img src={logo} alt='SAH logo'/>
        <OAuth />
      </div>
    </div>
  );
};

export default Splash;
