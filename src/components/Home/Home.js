import React from "react";

import "./Home.scss";

const HomeHeader = () => {
  const profilePic = require("../../images/profile-pic.jpg");
  return (
    <div className="home-header bg-lt-spash">
      <a href="/">
        <img src={profilePic} id="profile-pic" />
      </a>
      <h1 className="droid-bold">Kyle Bonar</h1>
      <h2>
        Practicing <span className="droid-bold">Full Stack Developer</span>
      </h2>
      <h2>
        Professional <span className="droid-bold">Coffee Drinker</span>
      </h2>
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <HomeHeader />
      <div className="home-content">
        <p>
          <span className="droid-bold">Hello world!</span> Welcome to my
          portfolio website.
        </p>

        <p>
          I am a <span className="droid-bold">Full Stack Dev</span> who likes to
          work with JavaScript as much as possible.
        </p>

        <p>
          I primarily focus on the front-end, I like to make pixel-perfect,
          minimalistic designs, but I also enjoy working with databases and
          server logic.
        </p>

        <p>
          The majority of the updates to this site will be focused on the
          "Projects" section. Stay tuned!
        </p>

        <p>-Kyle Bonar</p>
      </div>
    </div>
  );
};

export default Home;
