import React from 'react'

import './Footer.scss'

import Images, { Logos } from '../Images/Images.js'

const Footer = () => {
	return (
		<div className="footer-container">
			<a href="https://github.com/KyleBonar" target="_blank">
				<img 
					src={Logos.GitHubLogo}
					alt="Kyle Bonar GitHub profile"
					title="Kyle Bonar GitHub profile"
					className="footer-image"
				/>
			</a>
			<a href="https://www.linkedin.com/in/kyle-bonar-687276126" target="_blank">
				<img
					src={Logos.LinkedInLogo}
					alt="Kyle Bonar LinkedIn Profile"
					title="Kyle Bonar LinkedIn Profile"
					className="footer-image"
				/>
			</a>
		</div>
	)
}

module.exports = Footer