import React from 'react';
import { NavLink, Link } from 'react-router-dom'

class Nav extends React.Component {
	render() {

		return(
			<div className="navBarContainer">
				<div id="navBar">
					<Link className="home-link" exact to="/">
						Kyle Bonar
					</Link>

					<div id="nav">
						<ul>
							<li>
								<NavLink exact className="menu-link" activeClassName="active" to="/about">
									About
								</NavLink>
							</li>
							<li>
								<NavLink className="menu-link" activeClassName="active" to="/projects">
									Projects
								</NavLink>
							</li>
							<li>
								<NavLink className="menu-link" activeClassName="active" to="/resume">
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