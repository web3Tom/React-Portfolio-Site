import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {/* eslint-disable-next-line */}
      <a href="https://linkedin.com/tjcurran" target="_blank">
        <BsLinkedin />
      </a>
      {/* eslint-disable-next-line */}
      <a href="https://github.com/web3Tom" target="_blank">
        <BsGithub />
      </a>
      {/* eslint-disable-next-line */}
      <a href="https://twitter.com/traderteej" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
