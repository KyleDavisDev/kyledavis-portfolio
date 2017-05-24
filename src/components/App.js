import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import ProjectsSpecificDetails from './ProjectsSpecificDetails'
import Resume from './Resume'
import Footer from './Footer'



class App extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<div className="container">
					<Nav />

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/projects" component={Projects} />
							<Route path="/projects/details" component={ProjectsSpecificDetails} />
						<Route exact path="/resume" component={Resume} />
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