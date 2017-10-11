import React from "react";

import "./Resume.scss";

const ResumeImage = require("../../images/Bonar_Kyle_2017_09.pdf");

class Resume extends React.Component {
  componentDidMount() {
    document.title = "Resume";
  }
  render() {
    return (
      <div>
        <img src={ResumeImage} />
      </div>
    );
  }
}

module.exports = Resume;
