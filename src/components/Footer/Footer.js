import React, { Component } from 'react'

import './Footer.scss'

//Logos
import GitHubLogo from '../../images/GitHub-logo.png'
import LinkedInLogo from '../../images/LinkedIn-logo.png'

class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
				<a href="https://github.com/KyleBonar" target="_blank">
					<img 
						src={GitHubLogo}
						alt="Kyle Bonar GitHub profile"
						title="Kyle Bonar GitHub profile"
						className="footer-image"
					/>
				</a>
				<a href="https://www.linkedin.com/in/kyle-bonar-687276126" target="_blank">
					<img
						src={LinkedInLogo}
						alt="Kyle Bonar LinkedIn Profile"
						title="Kyle Bonar LinkedIn Profile"
						className="footer-image"
					/>
				</a>
			</div>
		)
	}
}

module.exports = Footer