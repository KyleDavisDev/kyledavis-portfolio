import React, {Component} from "react";

class Resume extends Component {
  componentDidMount() {
    document.title = "Resume";
  }
  render() {
    const ResumeImage = require("../../images/Bonar_Kyle_2017_09.pdf");
    return (
      <div>
        <img src={ResumeImage} />
      </div>
    );
  }
}

module.exports = Resume;
