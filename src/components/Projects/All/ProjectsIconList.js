import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Images, { Screenshots } from "../../Images/Images.js";

class ProjectsIconList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {
          displayName: "Feature Spotlight",
          img: Screenshots.FeatureSpotlight,
          title: "UTSA Feature Spotlight",
          linkURL: "feature_spotlight"
        },
        {
          displayName: "ReactJS Portfolio",
          img: Screenshots.KyleBonarReactWebsite,
          title: "Kyle Bonar ReactJS Website",
          linkURL: "kyle_bonar_react"
        },
        {
          displayName: "Physics Department",
          img: Screenshots.TamuPhysicsSS,
          title: "Physics Deparment at Texas A&M",
          linkURL: "tamu_physics"
        },
        {
          displayName: "Astronomy Department",
          img: Screenshots.TamuAstronomySS,
          title: "Astronomy Deparment at Texas A&M",
          linkURL: "tamu_mitchell"
        },
        {
          displayName: "Kyle Bonar Original",
          img: Screenshots.KyleBonarOriginalWebsite,
          title: "Kyle Bonar original website",
          linkURL: "kyle_bonar_original"
        },
        {
          displayName: "Illustrator Web Icons",
          img: Screenshots.CustomWebIcons,
          title: "Adobe Illustrator Icons",
          linkURL: "illustrator_web_icons"
        },
        {
          displayName: "Word Counting App",
          img: Screenshots.WordCounterSS,
          title: "Word Counting App",
          linkURL: "Word_Counting_App"
        },
        {
          displayName: "Phyllotaxis App",
          img: Screenshots.PhyllotaxisSS,
          title: "Phyllotaxis App",
          linkURL: "Phyllotaxis_App"
        },
        {
          displayName: "Fractal Trees App",
          img: Screenshots.FractalTreesSS,
          title: "Fractal Trees App",
          linkURL: "Fractal_Trees_App"
        },
        {
          displayName: "Double Pendulum Visual",
          img: Screenshots.DoublePendulumSS,
          title: "Double Pendulum Visualization",
          linkURL: "Double_Pendulum_Vis"
        },
        {
          displayName: "Classic Ping Pong",
          img: Screenshots.PingPongSS,
          title: "Ping Pong Game",
          linkURL: "Classic_Ping_Pong"
        }
      ]
    };
  }

  render() {
    return (
      <div className="projects-icon-list-container">
        {this.state.cards.map(icon =>
          <NavLink
            key={icon.displayName}
            className="project-card"
            to={{
              pathname: this.props.match.url + "/details",
              search: "?title=" + icon.linkURL
            }}
          >
            <img
              src={icon.img}
              className="card-image"
              title={icon.title}
              alt={icon.title}
            />
            {icon.displayName}
          </NavLink>
        )}

      </div>
    );
  }
}

module.exports = ProjectsIconList;
