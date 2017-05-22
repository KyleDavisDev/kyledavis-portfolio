import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Home from './Home'
import Projects from './Projects'
import Resume from './Resume'


class App extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<div className="container">
					<Nav />
					<Route exact path="/" component={About} />
					<Route path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route path="/resume" component={Resume} />
				</div>
			</BrowserRouter>
		)
	}
}

module.exports = App