import "./portfolio.css";

import IMG1 from "../../assets/serivce.jpg";
import IMG2 from "../../assets/orgnaic.jpg";
import IMG3 from "../../assets/portfoila.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Service Provide Website with React.Js & Node.Js",
      img: IMG1,
      description:
        "An Service Provide website and DashBoard is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js | Node Js | MySQL ",
      github: "https://github.com/nandhu-techie-wizard/Be-Free-Service-Providing-Project",
    },
    {
      id: 2,
      title: "Oraginc Website",
      img: IMG2,
      description:
        "The Website At The Organic World, we are passionate about making a positive difference in the world we live in, in the lives that we touch. If you too nurse a passion for all things natural and sustainable and want to work towards effectively impacting the community.",
      technologies: "HTML | CSS",
      github: "https://github.com/nandhu-techie-wizard/Organic_Website",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      img: IMG3,
      description:
        "In The Portfolio all My Information ,Some Projects,Certificates and contact Details",
        technologies: "HTML | CSS | ReactJS ",
      github: "https://github.com/nandhu-techie-wizard/Organic_Website",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
