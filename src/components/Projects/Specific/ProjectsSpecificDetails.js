import React, { Component } from "react";
import QueryString from "query-string";
import Proptypes from "prop-types";
import ProjectList from "../ProjectList";

import "./ProjectsSpecificDetails.scss";

const RenderImage = props => {
  return <img src={props.src} className="specific-image" title={props.title} />;
};
RenderImage.propTypes = {
  src: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired
};

const RenderTitle = props => {
  return (
    <div className="project-title droid-bold">
      <a href={props.external} target="_blank" className="project-linkout">
        {props.name}
        <svg
          vectorEffect="non-scaling-stroke"
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="30px"
          viewBox="0 0 1289 1181"
        >
          <rect fill="none" x="-1" y="-1" width="1289" height="1181" />
          <path
            d="m1010.4 714.2l0 244q0 91.3-60.5 156.1t-145.7 64.8l-595.9 0q-85.2 0-145.7-64.8t-60.5-156.1l0-638.1q0-91.3 60.5-156.1t145.7-64.8l504.2 0q10 0 16.5 6.9t6.4 17.6l0 49.1q0 10.7-6.4 17.6t-16.5 6.9l-504.2 0q-47.3 0-80.9 36t-33.7 86.7l0 638.1q0 50.6 33.7 86.7t80.9 36l595.9 0q47.3 0 80.9-36t33.7-86.7l0-245.4q0-10.7 6.4-17.6t16.5-6.9l45.8 0q10 0 16.5 6.9t6.4 17.9zm275-662.9l0 392.7q0 19.9-13.6 34.5t-32.2 14.6 -32.2-14.6l-126.1-135 -467 500q-7.2 7.7-16.5 7.7t-16.5-7.7l-81.6-87.4q-7.2-7.7-7.2-17.6t7.2-17.6l467-500 -126.1-135q-13.6-14.6-13.6-34.5t13.6-34.5 32.2-14.6l366.7 0q18.6 0 32.2 14.6t13.6 34.5z"
            fill="#333"
          />
        </svg>
      </a>
    </div>
  );
};
RenderTitle.propTypes = {
  external: Proptypes.string.isRequired
};

const RenderDescription = props => {
  return (
    <div className="project-description">
      <h2>Description</h2>
      <p>{props.description}</p>
    </div>
  );
};
RenderDescription.propTypes = {
  description: Proptypes.string.isRequired
};

const RenderTools = props => {
  return (
    <div className="project-technologies">
      <h2>Tools</h2>
      <p>
        {props.tools.map(tool => {
          return (
            <img
              key={tool.name}
              src={tool.img}
              className="technology-image"
              title={tool.name}
              alt={tool.name}
            />
          );
        })}
      </p>
    </div>
  );
};
RenderTools.propTypes = {
  tools: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string.isRequired,
      img: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired
    })
  )
};

class ProjectsSpecificDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.getActiveProject = this.getActiveProject.bind(this);
  }

  componentWillMount() {
    //grab query string from URL, and make lower case
    const urlString = this.props.match.params.title.toLowerCase();
    const activeProject = this.getActiveProject(urlString);

    if (activeProject.length === 0) {
      window.location = "/";
    }
    this.setState({
      name: urlString
    });
  }

  componentDidMount() {
    const activeProject = this.getActiveProject(this.state.name);
    document.title = "Kyle Bonar - " + activeProject;
  }

  render() {
    return (
      <div className="project-specific-container">
        {ProjectList.filter(project => {
          return this.state.name === project.url.toLowerCase();
        }).map(project => {
          return (
            <div key="project.name" className="specific">
              <div className="left image-holder">
                <a href={project.external.linkPath} target="_blank" title={project.name} className="image-link">
                  <RenderImage src={project.img} title={project.name} />
                </a>
              </div>

              <div className="right text-holder">
                <RenderTitle
                  external={project.external.linkPath}
                  name={project.name}
                />
                <RenderDescription description={project.description} />
                <RenderTools tools={project.tools} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  getActiveProject(urlString) {
    //match url query with specific entry in the state data
    return ProjectList.filter(project => {
      return urlString === project.url.toLowerCase();
    }).map(project => {
      return project.documentTitleName;
    });
  }
}

module.exports = ProjectsSpecificDetails;
