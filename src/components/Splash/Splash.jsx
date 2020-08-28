import React from 'react';
import { OAuth } from '../OAuth/OAuth';
import logo from '../../../public/assets/SAH_transparent.svg';
 
export const Splash = () => {
  return (
    <>
      <header className="header-container">
        <img src={logo} alt="SAH logo" />
      </header>
      <section>
        <p className="whitespace-p">
          Music has the power to transport you to another time and place. Using your Spotify Premium account, you can search for songs that best fit the prompts provided to bring back old memories and start new conversations. Invite your friends and take turns judging whose song best fits the theme. The first person to get five points wins. Gather your friends and start sharing!
        </p>
        <OAuth />
      </section>
      <footer>
        <a href="#">About the developers</a>
      </footer>
    </>
  );
};

export default Splash;
