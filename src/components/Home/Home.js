import React from "react";

import "./Home.scss";

const HomeHeader = () => {
  const profilePic = require("../../images/profile-pic.jpg");
  return (
    <div className="home-header p2 bg-lt-spash droid ">
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
    <div id="contact-me">
      <h2 className="light-black droid bold mb1">Contact</h2>
      <ul>
        <li>Yo</li>
      </ul>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <HomeHeader />
      <div className="home-content p2 droid">
        <HomeAboutMe />
        <HomeContact />
      </div>
    </div>
  );
};

export default Home;
