import React from 'react';

import './Projects.scss'

import ProjectsTextTop from './ProjectsTextTop.js'
import ProjectsIconList from './ProjectsIconList.js'

import ReactGA from 'react-ga'

class Projects extends React.Component {
	componentDidMount() {
		document.title = "Kyle Bonar - Projects"
		this._initGA()
		this._logPageView()
	}
	render() {
		return(
			<div className="projects-container">
				<ProjectsTextTop />

				<ProjectsIconList match={this.props.match}/>
			</div>
		)
	}

	_initGA()  {
		ReactGA.initialize('UA-100074461-1')
	}
	_logPageView() {
		ReactGA.set({ page: window.location.pathname + window.location.search });
		ReactGA.pageview(window.location.pathname + window.location.search);
	}
}

module.exports = Projects