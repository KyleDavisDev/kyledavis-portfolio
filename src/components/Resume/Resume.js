import React, { Component } from "react";

class Resume extends Component {
  componentDidMount() {
    document.title = "Resume";
  }
  render() {
    const ResumeImage = require("../../images/Davis_Kyle_2019.pdf");
    return (
      <div>
        <img src={ResumeImage} />
      </div>
    );
  }
}

module.exports = Resume;
