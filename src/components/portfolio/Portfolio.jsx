import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/travel-site.jpg';
import IMG5 from '../../assets/personal-blog.jpg';
import IMG3 from '../../assets/salon-client.jpg';
import IMG4 from '../../assets/business-marketing.png';
import IMG1 from '../../assets/ECOM-store-react.png';
import IMG6 from '../../assets/boogle-google.png';

// DO NOT USE PICTURES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'React ECOM Store',
    github: 'https://github.com/web3Tom/crwn-clothing-v2',
    demo: 'https://jade-sunburst-b894bd.netlify.app/',
  },
  {
    id: 2,
    image: IMG6,
    title: 'Google Clone',
    github: 'https://github.com/web3Tom/boogle-google-clone',
    demo: 'https://boogle-google-clone.vercel.app',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Standalone Travel Site',
    github: 'https://github.com/web3Tom/travel-site',
    demo: 'https://web3tom.github.io/travel-site/',
  },

  {
    id: 4,
    image: IMG3,
    title: 'Client Site - Salon Webpage',
    github: 'https://github.com/web3Tom/Client-Site-Salon-Webpage',
    demo: 'https://ljshorecuts.com',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Personal Business Site - Digital Marketing Webpage',
    github: 'https://github.com/web3Tom/Client-Site-Digital-Agency',
    demo: 'https://arcanadigital.io',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Personal Blog - In Production',
    github: 'https://github.com/web3Tom/Web3hrive_Blog',
    demo: '',
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
