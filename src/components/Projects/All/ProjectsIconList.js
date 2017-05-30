import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//ScreenShots
import TamuPhysicsSS from '../../../images/Tamu-Physics-SS.png'
import TamuAstronomySS from '../../../images/Tamu-Astronomy-SS.png'
import PingPongSS from '../../../images/PingPong-SS.png'
import WordCounterSS from '../../../images/WordCounter-SS.png'
import PhyllotaxisSS from '../../../images/Phyllotaxis-SS.png'
import FractalTreesSS from '../../../images/FractalTrees-SS.png'
import DoublePendulumSS from '../../../images/DoublePendulum-SS.png'
import Example from '../../../images/example.png'

class ProjectsIconList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			icons: [
				{ displayName: "Physics Department", img: TamuPhysicsSS, title:"Physics Deparment at Texas A&M", linkURL: "tamu_physics"},
				{ displayName: "Astronomy Department", img: TamuAstronomySS, title:"Astronomy Deparment at Texas A&M", linkURL: "tamu_mitchell"},
				{ displayName: "Classic Ping Pong", img: PingPongSS, title:"Ping Pong Game", linkURL: "Classic_Ping_Pong"},
				{ displayName: "Word Counting App", img: WordCounterSS, title:"Word Counting App", linkURL: "Word_Counting_App"},
				{ displayName: "Phyllotaxis App", img: PhyllotaxisSS, title:"Phyllotaxis App", linkURL: "Phyllotaxis_App"},
				{ displayName: "Fractal Trees App", img: FractalTreesSS, title:"Fractal Trees App", linkURL: "Fractal_Trees_App"},
				{ displayName: "Double Pendulum Visual", img: DoublePendulumSS, title:"Double Pendulum Visualization", linkURL: "Double_Pendulum_Vis"},
				{ displayName: "Example 8", img: Example, title:"Example Title", linkURL: "/"},
				{ displayName: "Example 9", img: Example, title:"Example Title", linkURL: "/"}
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
						<img src={icon.img} className="card-image" title={icon.title} alt={icon.title}/>
						{icon.displayName}
					</NavLink>			
				)}

			</div>
		)
	}

}

module.exports = ProjectsIconList