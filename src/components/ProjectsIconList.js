import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ProjectsIconList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icons: [
				{ displayName: "Physics Department", img: "Tamu-Physics-SS.png", title:"Physics Deparment at Texas A&M", linkURL: "tamu_physics"},
				{ displayName: "Astronomy Department", img: "Tamu-Astronomy-SS.png", title:"Astronomy Deparment at Texas A&M", linkURL: "tamu_mitchell"},
				{ displayName: "Example 3", img: "example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 4", img: "example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 5", img: "example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 6", img: "example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 7", img: "example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 8", img: "example.png", title:"Example Title", linkURL: "/"},
				{ displayName: "Example 9", img: "example.png", title:"Example Title", linkURL: "/"}
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
							<img src={`/src/images/${icon.img}`} style={{height:200, width: 200}} title={icon.title} alt={icon.title}/>
							{icon.displayName}
						</NavLink>			
				)}

			</div>
		)
	}

}

module.exports = ProjectsIconList