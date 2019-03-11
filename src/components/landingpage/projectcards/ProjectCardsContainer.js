import React, { Component } from "react";
import { projectData } from "../../../data/data";
import ProjectCards from "./ProjectCards";


class ProjectCardsContainer extends Component {
  render() {

    const data = projectData;

    return (
      <div className="Projects-container">
        <ProjectCards
        data={data}
         />
      </div>
      
    );
  }
}

export default ProjectCardsContainer;
