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
      <h1 className="bold light-black">Kyle Davis</h1>
      <h2 className="grey">
        Practicing <span className="bold">Full Stack Developer</span>
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
      <p>Hello world! Welcome to my portfolio website.</p>

      <p>
        I am a <span className="bold">Full Stack Developer</span> that enjoys
        working with JavaScript as much as possible. You will, however, often
        find me learning new languages as well!
      </p>

      <p>
        I primarily focus on the front-end, where I make pixel-perfect,
        minimalistic designs, but I also enjoy working with databases and server
        logic. In my projects page, for example, you can find several
        applications where I wrote the entire stack!
      </p>

      <p>
        The majority of the updates to this site will be focused on the projects
        page. Stay tuned!
      </p>

      <p>-Kyle Davis</p>
    </div>
  );
};

const HomeContact = () => {
  return (
    <div id="contact-me" className="mb2">
      <h2 className="light-black droid bold mb1">Contact</h2>
      <ul>
        <li>
          <a href="mailto:kyledavisdev@gmail.com">
            <Mail /> Mail
          </a>
        </li>
        <li>
          <a href="https://github.com/kyledavisdev" target="_blank">
            <GitHub /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kyle-davis-687276126/"
            target="_blank"
          >
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
