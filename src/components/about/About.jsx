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
              <h5>Front-End Experience</h5>
              <small>3 Years</small>
            </article>

            <article className="about__card">
              <VscNewFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>
            </article>
          </div>
          <h2>Front End Experience</h2>
          <p>
            I am a Freelance Web Developer proficient in React, JavaScript,
            HTML5, CSS, and numerous other web-based technologies. Along with
            React, I have experience working with other popular frameworks such
            as Next.js and GraphQL, leveraging Redux and functional hooks in
            React projects, TypeScript, and employing backend services such as
            Firebase and Netlify. I've completed numerous client projects with
            deliverables encompassing all stages of the web-design process
            inlcuding wireframing to applying SEO techniques.
          </p>
          <h2>Prior Experience</h2>
          <p>
            I spent 6 years working in finance and consulting. My most recent
            position was as a data analyst for a financial consulting company
            where I helped deploy multiple financial applications and CRM
            workflows. During this time I became adept in VBA programming and
            proficent in APEX and Bloomberg API, and developed department-wide
            financial processes for onboarding client data.
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
