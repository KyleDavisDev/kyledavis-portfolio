import React from 'react';

import ProjectsTextTop from './ProjectsTextTop'
import ProjectsIconList from './ProjectsIconList'

class Projects extends React.Component {
	render() {
		return(
			<div className="projects-container">
				<ProjectsTextTop />
			
				<ProjectsIconList />
			</div>
		)
	}
}

module.exports = Projects