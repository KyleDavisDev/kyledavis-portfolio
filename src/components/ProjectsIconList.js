import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ProjectsIconList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icons: [
				{ displayName: "Physics Department", img: "Tamu-Physics-SS.png", title:"Physics Deparment at Texas A&M", linkURL: "tamu_physics"},
				{ displayName: "Astronomy Department", img: "Tamu-Astronomy-SS.png", title:"Astronomy Deparment at Texas A&M", linkURL: "tamu_mitchell"},
				{ displayName: "Classic Ping Pong", img: "PingPong-SS.png", title:"Ping Pong Game", linkURL: "Classic_Ping_Pong"},
				{ displayName: "Word Counting App", img: "WordCounter-SS.png", title:"Word Counting App", linkURL: "Word_Counting_App"},
				{ displayName: "Phyllotaxis App", img: "Phyllotaxis-SS.png", title:"Phyllotaxis App", linkURL: "Phyllotaxis_App"},
				{ displayName: "Fractal Trees App", img: "FractalTrees-SS.png", title:"Fractal Trees App", linkURL: "Fractal_Trees_App"},
				{ displayName: "Double Pendulum Visual", img: "DoublePendulum-SS.png", title:"Double Pendulum Visualization", linkURL: "Double_Pendulum_Vis"},
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