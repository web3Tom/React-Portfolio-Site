import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        TJ CURRAN
      </a>
      <ul className="permalinks">
        <li>
          <a href="#"></a>Home
        </li>
        <li>
          <a href="#about"></a>About
        </li>
        <li>
          <a href="#experience"></a>Experience
        </li>
        <li>
          <a href="#services"></a>Services
        </li>
        <li>
          <a href="#portfolio"></a>Portfolio
        </li>
        <li>
          <a href="#contact"></a>Contact
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Web3hrive Portfolio Designs. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
