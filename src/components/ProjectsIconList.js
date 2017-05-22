import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ProjectsIconList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icons: [
				{ displayName: "Department Website", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "tamu_physics"},
				{ displayName: "Example 2", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 3", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 4", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 5", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 6", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 7", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 8", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 9", displayImageURL: "/src/images/example.png", title:"Example Title", linkURL: "/"}
			]
		}
	}

	render() {
		return(
			<div className="projects-icon-list-container">
				{this.state.icons.map( (icon) =>	
						<NavLink
							key={icon.displayName}
							className="project-card"
							to={{
								pathname: this.props.match.url + '/details',
								search: '?title=' + icon.linkURL 
							}}>
							<img src={icon.displayImageURL} style={{height:200, width: 200}} title={icon.title} />
							{icon.displayName}
						</NavLink>			
				)}

			</div>
		)
	}

}

module.exports = ProjectsIconList