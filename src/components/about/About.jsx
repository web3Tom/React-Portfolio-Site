import React from "react";
import "./about.css";
import ME from "../../assets/about-me_v2.jpg";
import { FaAward } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Experience</small>
            </article>

            <article className="about__card">
              <VscNewFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>
            </article>
          </div>
          <h2>Front End Experience</h2>
          <p>
            I am hobbyist Web Developer with a working proficiency in HTML, CSS
            and Javascript. I have experience working with popular frameworks
            such as React.js, Next.js and GraphQL and have a solid understanding
            of Node.js and Git version control. I also have professional
            experience working with Adobe Photoshop, Illustrator, InDesign and
            XD.
          </p>
          <h2>Prior Experience</h2>
          <p>
            I spent 6 years working in finance and consulting. My most recent
            position was as a data analyst for a financial consulting company.
            During this time I became an expert in VBA programming, financial
            modeling and proficient in Bloomberg API and Apex coding languages.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
