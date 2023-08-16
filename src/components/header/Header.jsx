import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>NANDA ELAVARASU</h1>
        <h5 className="text-light job"> <Typewriter
  options={{
    strings: ['Full Stack Developer','certified Meta React Developer'],
    autoStart: true,
    loop: true,
  }}
/>
       </h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
