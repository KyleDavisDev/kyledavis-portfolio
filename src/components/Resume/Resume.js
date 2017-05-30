import React from 'react';

import './Resume.scss'

class Resume extends React.Component {
	componentDidMount() {
		document.title = "Resume";
	}
	render() {
		return(
			<div> Resume</div>
		)
	}
}

module.exports = Resume