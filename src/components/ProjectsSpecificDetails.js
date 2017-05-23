import React, { Component } from 'react'
import QueryString from 'query-string'

class ProjectsSpecificDetails extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			allProjects: [
				{
					urlName: "tamu_physics",
					name: "Texas A&M Physics Website",
					description: " In just two short months, the Physics Department website was given a lot of love by receiving a new server host, an updated backend, a new responsive design, and a plethera of options for staff and faculty members to keep the content updated. This project was completed within a very small team and is the project I currently spend most of my time maintaining and adding additional functionality to.",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "Tamu-Physics-SS.png"
				},
				{
					urlName: "tamu_mitchell",
					name: "Texas A&M Astronomy Website",
					description: "As a student Web Development Assistant, I worked on a small team to recreate the Astronomy Department's home domain. We were responsible for migrating years of static content into a MySQL database, for both easier managment and record keeping, while also ensuring that every page be responsive. Several custom Wordpress themes were developed for this project and are actively maintained today.",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "Tamu-Astronomy-SS.png"
				},
				{
					urlName: "Example 1",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
				},
				{
					urlName: "Example 2",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
				},
				{
					urlName: "Example 3",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
				},
				{
					urlName: "Example 4",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
				},
				{
					urlName: "Example 5",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
				},
				{
					urlName: "Example 6",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
				},
				{
					urlName: "Example 7",
					name: "Texas A&M Physics Website",
					description: "lorem ipsum",
					imageTitle: "",
					tools: [
						{ name: "PHP 5.4", img: "PHP-logo.png" },
						{ name: "Wordpress", img: "Wordpress-logo.png" },
						{ name: "MySQL database", img: "MySQL-logo.png" },
						{ name: "JQuery JavaScript library", img: "JQuery-logo.png" },
						{ name: "JavaScript", img: "JS-logo.png" },
						{ name: "Foundation Zurb CSS library", img: "Foundation-logo.png" },
						{ name: "CSS3", img: "CSS3-logo.png" }
					],
					img: "example.png"
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
		document.title = "Projects - " + this.state.name;
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
								<img src={`/src/images/${project.img}`} style={{height:200, width:200}} title={project.imageTitle}/>
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
												src={`/src/images/${tool.img}`}
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