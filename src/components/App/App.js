import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
ReactGA.initialize("UA-100074461-1");

import Nav from "../Navigation/Nav.js";
import Home from "../Home/Home.js";
import Projects from "../Projects/All/Projects.js";
import ProjectsSpecificDetails from "../Projects/Specific/ProjectsSpecificDetails.js";
import Resume from "../Resume/Resume.js";
import Footer from "../Footer/Footer.js";

const ResumeImage = require("../../images/Bonar_Kyle_2017_09.pdf");

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
  return null;
};

class App extends React.Component {
  componentDidMount() {
    document.title = "Kyle Bonar";
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={logPageView} />

          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route
              exact
              path="/projects/details/:title"
              component={ProjectsSpecificDetails}
            />
            <Route
              render={function() {
                return <p> Page not found. Sorry! </p>;
              }}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
