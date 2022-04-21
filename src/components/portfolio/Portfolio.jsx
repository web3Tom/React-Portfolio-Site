import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";

// DO NOT USE PICTURES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Standalone Travel Site",
    github: "https://github.com/web3Tom/travel-site",
    demo: "https://web3tom.github.io/travel-site/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Personal Blog - In Production",
    github: "https://github.com/web3Tom/Web3hrive_Blog",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {/* eslint-disable-next-line */}
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
