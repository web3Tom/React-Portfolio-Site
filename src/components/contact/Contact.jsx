import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8w5445q",
      "template_11sd8pe",
      form.current,
      "4Vw3a9EV-JUpZYRer"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thomas.james.curran@gmail.com</h5>
            {/* eslint-disable-next-line */}
            <a href="mailto:thomas.james.curran@gmail.com" target="_blank">
              Send me an email
            </a>
          </article>
          <article className="contact__option">
            <BsFacebook className="contact__option-icon" />
            <h4>Facebook Messenger</h4>
            <h5>Tj Curran</h5>
            {/* eslint-disable-next-line */}
            <a href="https://m.me/tjcurr" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiFillTwitterCircle className="contact__option-icon" />
            <h4>Twitter DM</h4>
            <h5>Tj Curran</h5>
            {/* eslint-disable-next-line */}
            <a
              className="twitter-dm-button"
              href="https://twitter.com/messages/compose?recipient_id=1178821856784240640&text=Hi%20TJ,%20I%20just%20visited%20your%20portfolio%20site."
              data-screen-name="@TraderTeej"
              target="_blank"
            >
              DM Me
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
