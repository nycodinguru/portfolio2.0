import React from "react";
import ProjectCardContainer from "./projectcards/ProjectCardsContainer";
import HeaderSection from "./headersection/HeaderSection";
import AboutSectionContainer from "./aboutsection/AboutSectionContainer";
import Footer from "../footer/Footer";
import NavbarContainer from "../navbar/NavbarContainer";

//
const LandingPage = props => {
    return(
        <div className="Landing-page-container">
            <NavbarContainer />
            <HeaderSection />
            <ProjectCardContainer />
            <AboutSectionContainer />
            <Footer />
        </div>
    )
};


export default LandingPage;
