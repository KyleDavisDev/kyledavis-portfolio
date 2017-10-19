import React, {Component} from "react";
import { Link } from "react-router-dom";
import ProjectList from "../ProjectList";

import "./Projects.scss";

const ProjectsTextTop = () => {
  return (
    <div className="projects-text-container">
      <h2 className="droid-bold text-center"> My Projects </h2>

      <p className="text-center">
        Check out some of the things that I've created or have been a part of
        over the years.
      </p>
    </div>
  );
};

const ProjectsIconList = props => {
  return (
    <div className="projects-icon-list-container">
      {ProjectList.map(project => (
        <Link
          key={project.name}
          className="project-card"
          to={`${props.match.url}/details/${project.url}`}
        >
          <img
            src={project.img}
            className="card-image"
            title={project.name}
            alt={project.name}
          />
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
      <div className="projects-container">
        <ProjectsTextTop />

        <ProjectsIconList match={this.props.match} />
      </div>
    );
  }
}

module.exports = Projects;
