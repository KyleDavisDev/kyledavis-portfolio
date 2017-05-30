import React from 'react';

import ProjectsTextTop from './ProjectsTextTop.js'
import ProjectsIconList from './ProjectsIconList.js'

import './Projects.scss'

class Projects extends React.Component {
	componentDidMount() {
		document.title = "Kyle Bonar - Projects";
	}
	render() {
		return(
			<div className="projects-container">
				<ProjectsTextTop />

				<ProjectsIconList match={this.props.match}/>
			</div>
		)
	}
}

module.exports = Projects