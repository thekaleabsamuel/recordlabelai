import React from 'react';
import ButtonGroup from './ButtonGroup';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

function MainContent() {
  return (
    <main className="main-content">
      <div className="left-content">
        <Logo />
        <h2>RECORD LABEL AI</h2>
      </div>
      <div className="right-content">
        <h1>JOIN OUR BETA</h1>
        <ButtonGroup />
      </div>
      <footer>
        <SocialIcons />
      </footer>
    </main>
  );
}

export default MainContent;