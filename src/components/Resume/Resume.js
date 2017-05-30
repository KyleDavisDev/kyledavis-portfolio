import React from 'react';

import './Resume.scss'

import ResumeImage from '../../images/Bonar_Kyle_resume.pdf'

class Resume extends React.Component {
	componentDidMount() {
		document.title = "Resume";
	}
	render() {
		return(
			<div>
				<img src={ResumeImage} />
			</div>
		)
	}
}

module.exports = Resume