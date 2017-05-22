import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsTextTop extends Component {
	render() {
		return(
			<div className="projects-text-container">
				<h2 className="droid-bold text-center"> My Projects </h2>

				<p className="droid-reg">
					Check out some of the things that I've created or have been a part of over the years. Clicking any of the images will take you to a page with more information on the project. You can also visit my <a className="inline-link" href="https://github.com/KyleBonar">GitHub</a> to checkout the source code for some of these.
				</p>
			</div>
		)
	}
}
module.exports = ProjectsTextTop