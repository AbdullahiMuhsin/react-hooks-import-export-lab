import React from "react";


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={image} alt="I made this" />
    </div>
  );
}


export default About;

const { image } = require("../data/user");


