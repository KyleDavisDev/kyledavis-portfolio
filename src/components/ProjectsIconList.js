import React, { Component } from 'react'

class ProjectsIconList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icons: [
				{ name: "Example 1", imageURL: "/src/images/example.png"},
				{ name: "Example 2", imageURL: "/src/images/example.png"},
				{ name: "Example 3", imageURL: "/src/images/example.png"},
				{ name: "Example 4", imageURL: "/src/images/example.png"},
				{ name: "Example 5", imageURL: "/src/images/example.png"},
				{ name: "Example 6", imageURL: "/src/images/example.png"},
				{ name: "Example 7", imageURL: "/src/images/example.png"},
				{ name: "Example 8", imageURL: "/src/images/example.png"},
				{ name: "Example 9", imageURL: "/src/images/example.png"}
			]
		}
	}

	render() {
		return(
			<div className="projects-icon-list-container">
				{this.state.icons.map( (icon) =>
						
						<div className="project-card">
							<img src={icon.imageURL} style={{height:75, width: 75}}/>
							{icon.name}
						</div>
					
				)}
			</div>
		)
	}
}

module.exports = ProjectsIconList