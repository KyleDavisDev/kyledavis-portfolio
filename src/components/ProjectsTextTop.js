import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsTextTop extends Component {
	render() {
		return(
			<div className="projects-text-container">
				<h2 className="droid-bold text-center"> My Projects </h2>

				<p className="droid-reg text-center">
					Check out some of the things that I've created or have been a part of over the years.
				</p>
			</div>
		)
	}
}

module.exports = ProjectsTextTop