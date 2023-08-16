import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Nandhujkn.png'
import vhms from '../../assets/vmhss.jpg'
import anna from '../../assets/anna-university-chennai-logo.png'
import bharat from '../../assets/bharat.png'


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Nandhu" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Certified Meta React Developer</h5>
              <small></small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
            Full Stack Developer with hands-on experience in
            identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in translating designs and
            wireframes into high-quality code, and writing application interface
            code via JavaScript and React JS workflows and Backend NodeJs,ExperssJS Java and SpringBoot. Adept at monitoring and
            maintaining frontend performance and troubleshooting and BackEnd the API's debugging
            issues. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
};

export default Intro;
