import React, { Component } from "react";
import QueryString from "query-string";

import "./ProjectsSpecificDetails.scss";

import Images, { Screenshots, Logos } from "../../Images/Images.js";

class ProjectsSpecificDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      allProjects: [
        {
          urlName: "feature_spotlight",
          documentTitleName: "Feature Sptlight",
          name: "Feature Spotlight",
          description:
            "This project was originally developed for the UTSA Mobile App in an attempt to battle the feeling of staleness, which existed on the app prior. Originally, the app would open up to a \"What's New\" landing page which would be updated every couple of months but with the new design and layout, any of the app's components can be promoted and shown off at the drop of a hat. In production, this design has been used for the calendar, student registration, a tech conference, and now dining. This design is responsive and will soon be used on other non-mobile platforms as well.",
          tools: [
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "Bootstrap CSS Library", img: Logos.BootstrapLogo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.FeatureSpotlight,
          external: {
            linkPath:
              "https://crane.it.utsa.edu:8443/resources/appSpotlight/dining/index.html",
            name: "UTSA Feature Spotlight"
          }
        },
        {
          urlName: "kyle_bonar_react",
          documentTitleName: "React Portfolio",
          name: "ReactJS Portfolio",
          description:
            'A bit recursive, right? This project was a complete rewrite of my original portfolio website. This project has served as a platform for me to get comfortable with a ton of different popular JavaScript technologies and the build tools often associate with them; namely NodeJS, ReactJS, Express, Webpack, and Babel. Originally, I started with Facebook\'s "create-react-app", which greatly simplifies getting started with ReactJS, however I much prefer knowing what was going on under the hood. Because of this, I spent a good bit of time figuring out all of the individually pieces and how they work together. Understanding the ground-level components, I believe, have helped me to not only become a better ReactJS developer, but developer as a whole. Another awesome aspect of this project is scoring an "A+" in security, which is the highest score, from SSL Labs!',
          tools: [
            { name: "NodeJS Server Language", img: Logos.NodeJSLogo },
            { name: "ExpressJS Routing", img: Logos.ExpressLogo },
            { name: "ReactJS Library", img: Logos.ReactJSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "Sass CSS", img: Logos.SassLogo }
          ],
          img: Screenshots.KyleBonarReactWebsite,
          external: {
            linkPath: "/",
            name: "Kyle Bonar ReactJS Portfolio Website"
          }
        },
        {
          urlName: "tamu_physics",
          documentTitleName: "TAMU Physics",
          name: "Texas A&M Physics Website",
          description:
            "In just two short months, the Physics Department's website was given a massive overhaul. Everything from choosing a new server host, to updating the backend logic and databases, to making the design responsive, to providing the staff and faculty members a practical way to update and manage content throughout the site. On a massive team of exactly two people, I played a huge role in getting this project up and running.",
          tools: [
            { name: "PHP 5.4 Server Language", img: Logos.PHPLogo },
            { name: "Wordpress", img: Logos.WordPressLogo },
            { name: "MySQL database", img: Logos.MySQLLogo },
            { name: "JQuery JavaScript library", img: Logos.JQueryLogo },
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "Foundation Zurb CSS library", img: Logos.FoundationLogo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.TamuPhysicsSS,
          external: {
            linkPath: "http://physics.tamu.edu",
            name: "TAMU Physics Website"
          }
        },
        {
          urlName: "tamu_mitchell",
          documentTitleName: "TAMU Astronomy",
          name: "Texas A&M Astronomy Website",
          description:
            "As a student Web Development Assistant, I worked on a small team to recreate the Astronomy Department's home domain. We were responsible for migrating years of static content into a MySQL database, for both easier management and record keeping, while also ensuring that every page be responsive. Several custom Wordpress themes were developed for this project and are actively maintained today.",
          tools: [
            { name: "PHP 5.4 Server Language", img: Logos.PHPLogo },
            { name: "Wordpress", img: Logos.WordPressLogo },
            { name: "MySQL database", img: Logos.MySQLLogo },
            { name: "JQuery JavaScript library", img: Logos.JQueryLogo },
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "Foundation Zurb CSS library", img: Logos.FoundationLogo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.TamuAstronomySS,
          external: {
            linkPath: "http://mitchell.physics.tamu.edu",
            name: "TAMU Astronomy Website"
          }
        },
        {
          urlName: "kyle_bonar_original",
          documentTitleName: "Original Website",
          name: "Kyle Bonar First Personal Website",
          description:
            "When I started this project, I simply wanted to show off some projects that I had built, I had no idea the steps involved to put a website out on the internet. Starting from scratch, I had to configure a fresh server, install all of the proper tools, register and connect to the proper domain name, and implement security protocols. Luckily, with enough documentation and triple-checking each and every step, I was able to create this all my own. The webpage may not be the most visually appealing thing but I am incredibly proud of myself for sticking it out, and not getting overwhelmed by the immense challenge. Lastly, this project was built on the LEMP stack although, as it stands, is mostly just a static webpage.",
          tools: [
            { name: "Linux Server Language", img: Logos.LinuxLogo },
            { name: "Nginx Web Server", img: Logos.NginxLogo },
            { name: "PHP 5.4 Server Language", img: Logos.PHPLogo },
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.KyleBonarOriginalWebsite,
          external: {
            linkPath: "/KyleBonar_2015",
            name: "Original Kyle Bonar Website"
          }
        },
        {
          urlName: "illustrator_web_icons",
          documentTitleName: "Adobe Illustrator Web Icons",
          name: "Adobe Illustrator Web Icons",
          description:
            "As a UI/UX Developer for The University of Texas at San Antonio, I have spent a fair amount of time inside of the Adobe Suite. In doing so, I have created many icons, logos, and document designs which are currently being used across UTSA including UTSA Mobile App itself. I have also grown more comfortable in optimizing high-resolution images into a more web appropriate form to increase page load times and to decrease page load sizes.",
          tools: [
            { name: "Adobe Illustrator CC", img: Logos.AdobeIllustratorLogo }
          ],
          img: Screenshots.CustomWebIcons,
          external: {
            linkPath: "https://github.com/KyleBonar/utsa-icons",
            name: "GitHub of Web Icons"
          }
        },
        {
          urlName: "Word_Counting_App",
          documentTitleName: "Word Counter",
          name: "Word Counting App",
          description:
            "Fun application that counts the number of times each unique word appears within a text area and creates a \"bubble\" with a respective area. Becoming more comfortable with JavaScript's Object Oriented Programming and using JavaScript's canvas method to have a little fun were the main goals of this project. Even with a block of text 32,000 lines long and over 8,000 unique words, the application works like a charm. This code can be found in my gitHub.",
          tools: [
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.WordCounterSS,
          external: {
            linkPath: "/JSGames/wordCount",
            name: "Fun Word Counting Application"
          }
        },
        {
          urlName: "Phyllotaxis_App",
          documentTitleName: "Phyllotaxis",
          name: "Phyllotaxis App",
          description:
            "To create nice phyllotaxis images using only client-side rendering. Users can click anywhere within the canvas to create unique patterns and hopefully learn a bit too! The most common of phyllotaxis plants is the Aloe Polyphylla. This code can be found in my gitHub.",
          tools: [
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.PhyllotaxisSS,
          external: {
            linkPath: "/JSGames/phyllotaxis",
            name: "Phyllotaxis Art"
          }
        },
        {
          urlName: "Fractal_Trees_App",
          documentTitleName: "Fractal Trees",
          name: "Fractal Trees App",
          description:
            "To create a nice application which captures the ideas of fractal design. Users can click the canvas and cause a single branch to split into two. When the user clicks again, the branches will split again, so forth and so on. At any time, the tree can reset while sliders allow for customization and design a unique tree. This code can be found on my gitHub.",
          tools: [
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.FractalTreesSS,
          external: {
            linkPath: "/JSGames/fractalTrees",
            name: "Fractal Tree Application"
          }
        },
        {
          urlName: "Double_Pendulum_Vis",
          documentTitleName: "Double Pendulum",
          name: "Double Pendulum Visualization",
          description:
            "Inspired by my research as a senior in computational physics, the double pendulum is an excellent example of chaos theory. The simplified idea is that even the slightest change in the initial conditions can lead to a drastic change in the overall outcome of a system is incredibly interesting. This application relies entirely on the browser to run the model and the user can modify the double pendulum by using sliders. This code can be found on my gitHub.",
          tools: [
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.DoublePendulumSS,
          external: {
            linkPath: "/JSGames/doublePend",
            name: "Double Pendulum Visualization"
          }
        },
        {
          urlName: "Classic_Ping_Pong",
          documentTitleName: "Ping Pong",
          name: "Classic Ping Pong Application",
          description:
            "A classic arcade game brought to you in a browser! This was my first time messing around with HTML5's canvas as well as creating a very simple A.I.. Users simply need to click on the canvas to start the game, and use the arrow up and down arrow keys to move their paddle. The ball speeds up over time so be careful! This code can be found in my GitHub.",
          tools: [
            { name: "JavaScript", img: Logos.JSLogo },
            { name: "HTML5", img: Logos.HTML5Logo },
            { name: "CSS3", img: Logos.CSS3Logo }
          ],
          img: Screenshots.PingPongSS,
          external: {
            linkPath: "/JSGames/doublePend",
            name: "Simple Pong Game"
          }
        }
      ]
    };
  }

  //before render()
  componentWillMount() {
    //grab query string from URL, and make lower case
    let urlString = QueryString.parse(this.props.location.search);
    urlString = urlString.title.toLowerCase();

    this.setState({
      name: urlString
    });
  }

  //after render()
  componentDidMount() {
    //match url query with specific entry in the state data
    let activeProject = this.state.allProjects
      .filter(project => {
        return this.state.name === project.urlName.toLowerCase();
      })
      .map(project => {
        return project.documentTitleName;
      });
    document.title = "Kyle Bonar - " + activeProject;
  }

  render() {
    return (
      <div className="project-specific-container">
        {this.state.allProjects
          .filter(project => {
            return this.state.name === project.urlName.toLowerCase();
          })
          .map(project => {
            return (
              <div key="project.name" className="specific">
                <div className="left image-holder">
                  <img
                    src={`/${project.img}`}
                    className="specific-image"
                    title={project.imageTitle}
                  />
                </div>

                <div className="right text-holder">
                  <div className="project-title droid-bold">
                    <a
                      href={project.external.linkPath}
                      target="_blank"
                      className="project-linkout"
                    >
                      {project.name}

                      <svg
                        vectorEffect="non-scaling-stroke"
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="30px"
                        viewBox="0 0 1289 1181"
                      >
                        <rect
                          fill="none"
                          x="-1"
                          y="-1"
                          width="1289"
                          height="1181"
                        />
                        <path
                          d="m1010.4 714.2l0 244q0 91.3-60.5 156.1t-145.7 64.8l-595.9 0q-85.2 0-145.7-64.8t-60.5-156.1l0-638.1q0-91.3 60.5-156.1t145.7-64.8l504.2 0q10 0 16.5 6.9t6.4 17.6l0 49.1q0 10.7-6.4 17.6t-16.5 6.9l-504.2 0q-47.3 0-80.9 36t-33.7 86.7l0 638.1q0 50.6 33.7 86.7t80.9 36l595.9 0q47.3 0 80.9-36t33.7-86.7l0-245.4q0-10.7 6.4-17.6t16.5-6.9l45.8 0q10 0 16.5 6.9t6.4 17.9zm275-662.9l0 392.7q0 19.9-13.6 34.5t-32.2 14.6 -32.2-14.6l-126.1-135 -467 500q-7.2 7.7-16.5 7.7t-16.5-7.7l-81.6-87.4q-7.2-7.7-7.2-17.6t7.2-17.6l467-500 -126.1-135q-13.6-14.6-13.6-34.5t13.6-34.5 32.2-14.6l366.7 0q18.6 0 32.2 14.6t13.6 34.5z"
                          fill="#333"
                        />
                      </svg>
                    </a>
                  </div>

                  <div className="project-description">
                    <h2>Description</h2>
                    <p>{project.description}</p>
                  </div>

                  <div className="project-technologies">
                    <h2>Tools</h2>
                    <p>
                      {project.tools.map(tool => {
                        return (
                          <img
                            key={tool.name}
                            src={tool.img}
                            className="technology-image"
                            title={tool.name}
                            alt={tool.name}
                          />
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

module.exports = ProjectsSpecificDetails;
