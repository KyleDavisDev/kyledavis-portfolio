import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'
import ProjectsSpecificDetails from './ProjectsSpecificDetails'


class App extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<div className="container">
					<Nav />

					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/about" component={About} />
						<Route exact path="/projects" component={Projects} />
							<Route path="/projects/details" component={ProjectsSpecificDetails} />
						<Route exact path="/resume" component={Resume} />
						<Route render={ function () {
							return <p> Page not found. Sorry! </p>
						}} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

module.exports = App