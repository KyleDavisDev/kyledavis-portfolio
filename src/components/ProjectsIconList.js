import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ProjectsIconList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icons: [
				{ name: "Example 1", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 2", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 3", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 4", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 5", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 6", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 7", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 8", imageURL: "/src/images/example.png", title:"Example Title"},
				{ name: "Example 9", imageURL: "/src/images/example.png", title:"Example Title"}
			]
		}
	}

	render() {
		return(
			<div className="projects-icon-list-container">
				{this.state.icons.map( (icon) =>	
						<NavLink className="project-card" activeClassName="active" to="/">
							<img src={icon.imageURL} style={{height:75, width: 75}} title={icon.title} />
							{icon.name}
						</NavLink>			
				)}
			</div>
		)
	}

}

module.exports = ProjectsIconList