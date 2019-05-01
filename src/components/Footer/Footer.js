import React from "react";

import GitHub from "react-icons/lib/fa/github-square";
import LinkedIn from "react-icons/lib/fa/linkedin-square";

const Footer = () => {
  return (
    <div className="footer-container border-top">
      <a
        href="https://github.com/KyleDavisDev"
        target="_blank"
        className="footer-item"
      >
        <GitHub
          alt="Kyle Davis GitHub profile"
          title="Kyle Davis GitHub profile"
          className="footer-image"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kyle-davis-687276126/"
        target="_blank"
        className="footer-item"
      >
        <LinkedIn
          alt="Kyle Davis LinkedIn Profile"
          title="Kyle Davis LinkedIn Profile"
          className="footer-image"
        />
      </a>
    </div>
  );
};

export default Footer;
