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
                <b>CMS Integration</b> of design and content
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Shopping Cart</b> and checkout integration
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Testing and debugging</b> source code for bugs in code
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Back-end database</b> server setup for data storage needs
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEBDEV */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Custom, interactive and dynamic</b> Web Design
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Live feed</b> of social media profiles
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                High quality <b>animations</b> and component interactions
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
                <b>Logo and favicon design,</b> custom typography or
                vector-traced SVGs via Adobe Illustrator
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service__list-icon" />
              <p>
                <b>Live feed</b> of social media websites
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
      </div>
    </section>
  );
};

export default Services;
