import React, { Component } from 'react'

class ProjectsSpecificDetails extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		document.title = "Amazing Page";
	}

	render() {
		return(
			<div> {console.log(this.props)}</div>
		)
	}
}

module.exports = ProjectsSpecificDetails