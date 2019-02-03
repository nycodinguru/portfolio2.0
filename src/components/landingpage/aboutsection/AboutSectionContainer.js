import React, { Component } from "react";
import AboutSection from "./AboutSection";
import { aboutSectionInfo } from "../../../data/data";


export default class AboutContainer extends Component {
 
  render() {
    return (
      <AboutSection 
        info={aboutSectionInfo}
      />
    );
  }
}
