import React from 'react';

class About extends React.Component {
	render() {
		return(
			<div className="about-container">
				<p className="droid-reg">					
					<span className="droid-bold">Hello world!</span> Welcome to my portfolio website.
				</p>

				<p className="droid-reg">
					I am a <span className="droid-bold">Full Stack Dev</span> who is working with JavaScript as much as possible.
				</p>

				<p>
					I primarily focus on the front-end, I like to make pixel-perfect, minimalistic designs, but I also enjoy getting dirty on the backend with databases and server logic. 
				</p>

				<p>
					The majority of the updates to this site will be focused on the "Projects" section. Stay tuned!
				</p>

				<p>
					Thanks, Kyle Bonar
				</p>
			</div>
		)
	}
}

module.exports = About