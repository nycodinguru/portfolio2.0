import React, { Component } from "react";
import AboutSection from "./AboutSection";
import headshot from "../../../assets/images/headshot/headshot.jpg";


export default class AboutContainer extends Component {
 
  render() {
    const headshot = headshot;
    return (
      <AboutSection 
        headshot={headshot}
      />
    );
  }
}
