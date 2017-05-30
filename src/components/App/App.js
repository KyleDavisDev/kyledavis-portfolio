import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss'

import Nav from '../Navigation/Nav.js'
import Home from '../Home/Home.js'
import Projects from '../Projects/All/Projects.js'
import ProjectsSpecificDetails from '../Projects/Specific/ProjectsSpecificDetails.js'
import Resume from '../Resume/Resume.js'
import Footer from '../Footer/Footer.js'

import ResumeImage from '../../images/Bonar_Kyle_resume.pdf'

class App extends React.Component {
	render() {
		return(
			<BrowserRouter >
				<div className="container">
					<Nav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/projects" component={Projects} />
							<Route path="/projects/details" component={ProjectsSpecificDetails} />
						<Route exact path="/resume" render={ function() {
							return( <img src={ResumeImage} />)
						}} />
						<Route render={ function () {
							return <p> Page not found. Sorry! </p>
						}} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

module.exports = App