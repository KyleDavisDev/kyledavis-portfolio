import React, { Component } from 'react'
import QueryString from 'query-string'

import './ProjectsSpecificDetails.scss'

//ScreenShots
import TamuPhysicsSS from '../../../images/Tamu-Physics-SS.png'
import TamuAstronomySS from '../../../images/Tamu-Astronomy-SS.png'
import KyleBonarOriginalWebsite from '../../../images/kyle_bonar_original_website.png'
import PingPongSS from '../../../images/PingPong-SS.png'
import WordCounterSS from '../../../images/WordCounter-SS.png'
import PhyllotaxisSS from '../../../images/Phyllotaxis-SS.png'
import FractalTreesSS from '../../../images/FractalTrees-SS.png'
import DoublePendulumSS from '../../../images/DoublePendulum-SS.png'
import Example from '../../../images/example.png'

//Logos
import LinuxLogo from '../../../images/Linux-logo.png'
import NginxLogo from '../../../images/Nginx-logo.png'
import PHPLogo from '../../../images/PHP-logo.png'
import WordPressLogo from '../../../images/Wordpress-logo.png'
import MySQLLogo from '../../../images/MySQL-logo.png'
import JQueryLogo from '../../../images/JQuery-logo.png'
import JSLogo from '../../../images/JS-logo.png'
import HTML5Logo from '../../../images/HTML5-logo.png'
import FoundationLogo from '../../../images/Foundation-logo.png'
import CSS3Logo from '../../../images/CSS3-logo.png'


class ProjectsSpecificDetails extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			allProjects: [
				{
					urlName: "tamu_physics",
					documentTitleName: "TAMU Physics",
					name: "Texas A&M Physics Website",
					description: "In just two short months, the Physics Department website was given a lot of love by receiving a new server host, an updated backend, a new responsive design, and a plethera of options for staff and faculty members to keep the content updated. This project was completed within a very small team and is the project I currently spend most of my time maintaining and adding additional functionality to.",
					tools: [
						{ name: "PHP 5.4 Server Language", img: PHPLogo },
						{ name: "Wordpress", img: WordPressLogo },
						{ name: "MySQL database", img: MySQLLogo },
						{ name: "JQuery JavaScript library", img: JQueryLogo },
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "Foundation Zurb CSS library", img: FoundationLogo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: TamuPhysicsSS
				},
				{
					urlName: "tamu_mitchell",
					documentTitleName: "TAMU Astronomy",
					name: "Texas A&M Astronomy Website",
					description: "As a student Web Development Assistant, I worked on a small team to recreate the Astronomy Department's home domain. We were responsible for migrating years of static content into a MySQL database, for both easier managment and record keeping, while also ensuring that every page be responsive. Several custom Wordpress themes were developed for this project and are actively maintained today.",
					tools: [
						{ name: "PHP 5.4 Server Language", img: PHPLogo },
						{ name: "Wordpress", img: WordPressLogo },
						{ name: "MySQL database", img: MySQLLogo },
						{ name: "JQuery JavaScript library", img: JQueryLogo },
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "Foundation Zurb CSS library", img: FoundationLogo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: TamuAstronomySS
				},
				{
					urlName: "kyle_bonar_original",
					documentTitleName: "Original Website",
					name: "Kyle Bonar First Personal Website",
					description: "When I started this project, I simply wanted to show off some projects that I had built, I had no idea the steps involved to put a website out on the internet. Starting from scratch, I had to configure a fresh server, install all of the propor tools, register and connect to the proper domain name, and impliment security protocols. Luckily, with enough documentation and triple-checking each and every step, I was able to create this all my own. The webpage may not be the most visually appealing thing but I am incredibly proud of myself for sticking it out, and not getting overwhelmed by the immense challenge. Lastly, this project was built on the LEMP stack although, as it stands, is mostly just a static webpage.",
					tools: [
						{ name: "Linux Server Language", img: LinuxLogo },
						{ name: "Nginx Web Server", img: NginxLogo },
						{ name: "PHP 5.4 Server Language", img: PHPLogo },
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: KyleBonarOriginalWebsite
				},
				{
					urlName: "Classic_Ping_Pong",
					documentTitleName: "Ping Pong",
					name: "Classic Ping Pong Application",
					description: "A classic arcade game brought to you in a browser! This was my first time messing around with JavaScript's canvas method as well as creating an A.I. which acts as the opponent paddle. Users simply need to click on the canvas to start the game, and use the arrow up and down arrow keys to move their paddle. The ball speeds up over time so be careful! This code can be found in my GitHub.",
					tools: [
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "CSS3", img: CSS3Logo }
						
					],
					img: PingPongSS
				},
				{
					urlName: "Word_Counting_App",
					documentTitleName: "Word Counter",
					name: "Word Counting App",
					description: "Fun application that counts the number of times each unique word appears within a text area and creates a \"bubble\" with a respective area. Becoming more comfortable with JavaScript's Object Oriented Programming and using JavaScript's canvas method to have a little fun were the main goals of this project. Even with a block of text 32,000 lines long and over 8,000 unique words, the application works like a charm. This code can be found in my gitHub.",
					tools: [
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: WordCounterSS
				},
				{
					urlName: "Phyllotaxis_App",
					documentTitleName: "Phyllotaxis",
					name: "Phyllotaxis App",
					description: "To create nice phyllotaxis images using only client-side rendering. Users can click anywhere within the canvas to create unique patterns and hopefully learn a bit too! The most common of phyllotaxis plants is the Aloe Polyphylla. This code can be found in my gitHub.",
					tools: [
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: PhyllotaxisSS
				},
				{
					urlName: "Fractal_Trees_App",
					documentTitleName: "Fractal Trees",
					name: "Fractal Trees App",
					description: "To create a nice application which captures the ideas of fractal design. Users can click the canvas and cause a single branch to split into two. When the user clicks again, the branches will split again, so forth and so on. At any time, the tree can reset while sliders allow for customization and design a unique tree. This code can be found on my gitHub.",
					tools: [
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: FractalTreesSS
				},
				{
					urlName: "Double_Pendulum_Vis",
					documentTitleName: "Double Pendulum",
					name: "Double Pendulum Visualization",
					description: "Inspired by my research as a senior in computational physics, the double pendulum is an excellent example of chaos theory. The notion that even the slightest change in initial conditions can lead to a drastic change in the overall outcome of a system is incredibly interesting. This application relies entirely on the browser to run the model and the user can modify the double pendulum by using sliders. This code can be found on my gitHub.",
					tools: [
						{ name: "JavaScript", img: JSLogo },
						{ name: "HTML5", img: HTML5Logo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: DoublePendulumSS
				},
				{
					urlName: "Example 6",
					documentTitleName: "Example name",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					tools: [
						{ name: "PHP 5.4 Server Language", img: PHPLogo },
						{ name: "Wordpress", img: WordPressLogo },
						{ name: "MySQL database", img: MySQLLogo },
						{ name: "JQuery JavaScript library", img: JQueryLogo },
						{ name: "JavaScript", img: JSLogo },
						{ name: "Foundation Zurb CSS library", img: FoundationLogo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: Example
				},
				{
					urlName: "Example 7",
					documentTitleName: "Example name",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					tools: [
						{ name: "PHP 5.4 Server Language", img: PHPLogo },
						{ name: "Wordpress", img: WordPressLogo },
						{ name: "MySQL database", img: MySQLLogo },
						{ name: "JQuery JavaScript library", img: JQueryLogo },
						{ name: "JavaScript", img: JSLogo },
						{ name: "Foundation Zurb CSS library", img: FoundationLogo },
						{ name: "CSS3", img: CSS3Logo }
					],
					img: Example
				}
			]
		}

	}

	//before render()
	componentWillMount() {
		//grab query string from URL
		let urlString = QueryString.parse(this.props.location.search)

		this.setState({
			name: urlString.title
		})

	}

	//after render()
	componentDidMount() {
		let activeProject = this.state.allProjects.filter( (project) => {
			return this.state.name === project.urlName
		}).map( (project) => {
			return project.documentTitleName
		})
		document.title = "Kyle Bonar - " + activeProject;
	}


	render() {
		return(
			<div className="project-specific-container"> 
			{
				this.state.allProjects.filter( (project) => {
					return this.state.name === project.urlName 
				}).map( (project) => {
					return (
						<div key="project.name" className="specific">
							<div className="left image-holder">
								<img
									src={project.img}
									className="specific-image"
									title={project.imageTitle}
								/>
							</div>

							<div className="right text-holder">
								<div className="project-title droid-bold">
									{project.name}
								</div>

								<div className="project-description">
									<h2>Description</h2>
									<p>{project.description}</p>
								</div>


								<div className="project-technologies">
									<h2>Tools</h2>
									<p>
										{project.tools.map( (tool) => {
											return <img
												key={tool.name}
												src={tool.img}
												className="technology-image"
												title={tool.name}
												alt={tool.name} 
												/>
										})}
									</p>
								</div>

								<div className="project-pictures">
									<h2>Picture</h2>
									<div className="pictures-container">
									</div>
								</div>
							</div>

						</div>
					)
				})
			}
			</div>
		)
	}
}

module.exports = ProjectsSpecificDetails