import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProjectList from "../ProjectList";

const ProjectsTextTop = () => {
  return (
    <div id="projects" className="bg-lt-splash border-bottom p2">
      <div className="mw margin-center">
        <h2 className="bold"> My Projects </h2>

        <p className="">
          Check out some of the things that I've created or have been a part of
          over the years.
        </p>
      </div>
    </div>
  );
};

const ProjectsIconList = () => {
  return (
    <div className="projects-content margin-center">
      {ProjectList.map(project => (
        <Link
          key={project.name}
          className="card"
          to={`projects/details/${project.url}`}
        >
          <img src={project.img} title={project.name} alt={project.name} />
          {project.name}
        </Link>
      ))}
    </div>
  );
};

class Projects extends Component {
  componentDidMount() {
    document.title = "Kyle Bonar - Projects";
  }
  render() {
    return (
      <div className="container">
        <ProjectsTextTop />

        <ProjectsIconList />
      </div>
    );
  }
}

module.exports = Projects;
