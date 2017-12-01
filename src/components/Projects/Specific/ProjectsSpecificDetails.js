import React, { Component } from "react";
import QueryString from "query-string";
import PropTypes from "prop-types";
import ProjectList from "../ProjectList";
import ArrowRight from "react-icons/lib/fa/arrow-right";

const RenderImage = props => {
  return <img src={props.src} className="project-image" title={props.title} />;
};
RenderImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const RenderTitle = ({ external, name }) => {
  return (
    <div className="title bold">
      <a href={external} target="_blank" className="linkout">
        <h2>{name}</h2>
        <h3>
          View <ArrowRight />
        </h3>
      </a>
    </div>
  );
};
RenderTitle.propTypes = {
  external: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const RenderDescription = ({ description }) => {
  return (
    <div className="description mb2">
      <h2 className="mb1">Description</h2>
      <p>{description}</p>
    </div>
  );
};
RenderDescription.propTypes = {
  description: PropTypes.string.isRequired
};

const RenderTools = ({ tools }) => {
  return (
    <div className="technologies">
      <h2 className="mb1">Tools</h2>
      <p>
        {tools.map(tool => {
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
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

class ProjectsSpecificDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };

    this.getActiveProject = this.getActiveProject.bind(this);
  }

  componentWillMount() {
    //grab query string from URL, and make lower case
    const urlString = this.props.match.params.title.toLowerCase();
    //get active project or empty object
    const activeProject = this.getActiveProject(urlString);

    if (Object.keys(activeProject).length === 0) {
      window.location = "/";
    }
    this.setState({ project: activeProject });
  }

  render() {
    //destructure state and assign leftovers
    const { name, img, tools, description, ...project } = this.state.project;
    //destructure leftovers
    const { linkPath, externalName } = project.external;
    return (
      <div className="container">
        <div className="bg-lt-splash border-bottom">
          <div className="mw margin-center p2">
            <RenderTitle external={linkPath} name={name} />
          </div>
        </div>
        <div id="project-content" className="mw p2 margin-center">
          <a
            href={linkPath}
            target="_blank"
            title={externalName}
            className="image-link"
          >
            <RenderImage src={img} title={name} />
          </a>
          <div id="project-info">
            <RenderDescription description={description} />
            <RenderTools tools={tools} />
          </div>
        </div>
      </div>
    );
  }

  getActiveProject(urlString) {
    //match url query with specific entry in the state data
    for (let i = 0, len = ProjectList.length; i < len; i++) {
      if (urlString === ProjectList[i].url.toLowerCase()) {
        return ProjectList[i];
      }
    }
    return {};
  }
}

export default ProjectsSpecificDetails;
