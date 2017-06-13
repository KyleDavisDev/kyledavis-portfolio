import React from 'react';

import './Projects.scss'

import ProjectsTextTop from './ProjectsTextTop.js'
import ProjectsIconList from './ProjectsIconList.js'

class Projects extends React.Component {
	componentDidMount() {
		document.title = "Kyle Bonar - Projects"
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