import React from "react";

import Mail from "react-icons/lib/fa/envelope";
import GitHub from "react-icons/lib/fa/github-square";
import LinkedIn from "react-icons/lib/fa/linkedin-square";

const HomeHeader = () => {
  const profilePic = require("../../images/profile-pic.jpg");
  return (
    <div id="home" className="header p2 bg-lt-splash droid border-bottom">
      <a href="/">
        <img src={profilePic} id="profile-pic" />
      </a>
      <h1 className="bold light-black">Kyle Bonar</h1>
      <h2 className="grey">
        Practicing <span className="bold">UI/UX Developer</span>
      </h2>
      <h2 className="grey">
        Professional <span className="bold">Coffee Drinker</span>
      </h2>
    </div>
  );
};

const HomeAboutMe = () => {
  return (
    <div id="about-me">
      <h2 className="light-black droid bold mb1">About me</h2>
      <p>
        <span className="bold">Hello world!</span> Welcome to my portfolio
        website.
      </p>

      <p>
        I am a <span className="bold">Full Stack Dev</span> who likes to work
        with JavaScript as much as possible.
      </p>

      <p>
        I primarily focus on the front-end, I like to make pixel-perfect,
        minimalistic designs, but I also enjoy working with databases and server
        logic.
      </p>

      <p>
        The majority of the updates to this site will be focused on the
        "Projects" section. Stay tuned!
      </p>

      <p>-Kyle Bonar</p>
    </div>
  );
};

const HomeContact = () => {
  return (
    <div id="contact-me" className="mb2">
      <h2 className="light-black droid bold mb1">Contact</h2>
      <ul>
        <li>
          <a href="mailto:kylewbonar@gmail.com">
            <Mail /> Mail
          </a>
        </li>
        <li>
          <a href="https://github.com/kylebonar" target="_blank">
            <GitHub /> GitHub
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/kyle-bonar-687276126" target="_blank">
            <LinkedIn /> LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container">
      <HomeHeader />
      <div className="home-content p2 droid">
        <HomeAboutMe />
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
