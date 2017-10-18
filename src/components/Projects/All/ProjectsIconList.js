import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectList from "../ProjectList";

class ProjectsIconList extends Component {
  render() {
    return (
      <div className="projects-icon-list-container">
        {ProjectList.map(project => (
          <Link
            key={project.name}
            className="project-card"
            to={`${this.props.match.url}/details/${project.url}`}
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
  }
}

module.exports = ProjectsIconList;
