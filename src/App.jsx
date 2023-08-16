import React from 'react';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Topbar from './components/topbar/Topbar';
import Skills from './components/skills/skills';
import Certfi from './components/certfi/certfi';
import Education from './components/Education/Education';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Education/>
      < Skills/>
      <Portfolio />
      <Certfi/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
