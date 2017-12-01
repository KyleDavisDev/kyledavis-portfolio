import React from "react";

import GitHub from "react-icons/lib/fa/github-square";
import LinkedIn from "react-icons/lib/fa/linkedin-square";

const Footer = () => {
  return (
    <div className="footer-container border-top">
      <a
        href="https://github.com/KyleBonar"
        target="_blank"
        className="footer-item"
      >
        <GitHub
          alt="Kyle Bonar GitHub profile"
          title="Kyle Bonar GitHub profile"
          className="footer-image"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/kyle-bonar-687276126"
        target="_blank"
        className="footer-item"
      >
        <LinkedIn
          alt="Kyle Bonar LinkedIn Profile"
          title="Kyle Bonar LinkedIn Profile"
          className="footer-image"
        />
      </a>
    </div>
  );
};

export default Footer;
