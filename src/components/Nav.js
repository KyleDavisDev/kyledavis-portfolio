import React from 'react';
import {  NavLink } from 'react-router-dom'

class Nav extends React.Component {
	render() {

		return(
			<div className="navbarContainer">
				<div id="navbar">
					<a href='/'>Kyle Bonar</a>

					<div id="nav">
						<ul>
							<li>
								<NavLink exact activeClassName="active" to="/about">
									About
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active" to="/projects">
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink activeClassName="active" to="/resume">
									Resume
								</NavLink>
							</li>
						</ul>
					</div>
				</div>

			</div>
		)
	}
}

module.exports = Nav