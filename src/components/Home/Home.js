import React from 'react';

import './Home.scss'

import ReactGA from 'react-ga'

class Home extends React.Component {
	componentDidMount() {
		document.title = "Kyle Bonar";
		this._initGA()
		this._logPageView()
	}

	render() {
		return(
			<div className="home-container">
				<p className="home-header">					
					<span className="droid-bold">Hello world!</span> Welcome to my portfolio website.
				</p>

				<p>
					I am a <span className="droid-bold">Full Stack Dev</span> who likes to work with JavaScript as much as possible.
				</p>

				<p>
					I primarily focus on the front-end, I like to make pixel-perfect, minimalistic designs, but I also enjoy working with databases and server logic. 
				</p>

				<p>
					The majority of the updates to this site will be focused on the "Projects" section. Stay tuned!
				</p>

				<p>
					- Kyle Bonar
				</p>
			</div>
		)
	}

	_initGA()  {
		ReactGA.initialize('UA-100074461-1')
	}
	_logPageView() {
		ReactGA.set({ page: window.location.pathname + window.location.search });
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

}

module.exports = Home