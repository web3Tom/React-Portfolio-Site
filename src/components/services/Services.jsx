import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I can offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Identify</b> web-based user interactions
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Design and develop web-based user interface components via{" "}
                <b>react concepts</b>
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Translate designs and Lo-Fi wireframes into{" "}
                <b>high-quality code</b>
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Design visually appealing images, typography or vector-traced
                SVGs via <b>Photoshop and Illustrator</b>
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Responsive website design for <b>multi-device</b> access
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Optimized</b> code for smooth demployment and enhanced
                performance
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                Implementation of basic <b>search engine optimization</b> (SEO)
                techniques
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Testing and debugging</b> source code for bugs in code
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEV */}
      </div>
    </section>
  );
};

export default Services;
