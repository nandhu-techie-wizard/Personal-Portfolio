// Import Swiper React components
import React from 'react';
import './certfi.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import reactcer from '../../assets/reactbas.png'
import htmlcss from '../../assets/htmlcss.png'
import reactadv from '../../assets/reactadva.png'
import uiux from '../../assets/uiux.png'
import js from '../../assets/js.png'
import vc from '../../assets/versioncontrol.png'
import python from '../../assets/guvipython.png'
// Import Swiper styles
import 'swiper/css';

export default () => {
  return (

    <>
    <section id="certfi">
    <h5>The Certificate I Have</h5>
      <h2>Certificate</h2>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className="portfolio__item-image">
              <img src={reactcer} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Meta React Basics</h3>
              <p>ReactJS | JavaScript</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/SFHPWRSA6S2M"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div></SwiperSlide>
      <SwiperSlide><div className="portfolio__item-image">
              <img src={reactadv} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Meta React Advance</h3>
              <p>ReactJS | JavaScript</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/4LJKL4MELF6V"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div>
            </SwiperSlide>
      <SwiperSlide><div className="portfolio__item-image">
              <img src={htmlcss} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Meta HTML_CSS-Dapth </h3>
              <p>HTML| CSS | Bootstarp</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/YAJTPQFMQM42"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div></SwiperSlide>
      <SwiperSlide><div className="portfolio__item-image">
              <img src={uiux} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Meta Principles Of UI & UX </h3>
              <p>Figma | Adobe InDesign</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/4FK7SUG46ENT"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div></SwiperSlide>
            <SwiperSlide><div className="portfolio__item-image">
              <img src={js} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Meta Prg of JavaScript </h3>
              <p>JavaScript</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/N3LJPUGP7BV4"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div></SwiperSlide>
            <SwiperSlide><div className="portfolio__item-image">
              <img src={vc} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Meta Version Control </h3>
              <p>Git & Github</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.coursera.org/account/accomplishments/verify/VDMSUB7JPY4W"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div></SwiperSlide>
            <SwiperSlide><div className="portfolio__item-image">
              <img src={python} alt="react" />
            </div>
            <div className="portfolio__item-content">
              <h3>Google in  Python </h3>
              <p>Python</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href="https://www.guvi.in/verify-certificate?id=18532C69T1c1VNs822"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Verify
              </a>
            </div></SwiperSlide>
    </Swiper>
    </section>
    </>
  );
};