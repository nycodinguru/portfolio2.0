import React from "react";
import ProjectCardContainer from "./projectcards/ProjectCardsContainer";
import HeaderSection from "./headersection/HeaderSection";
import AboutSectionContainer from "./aboutsection/AboutSectionContainer";
import Footer from "../footer/Footer";


const LandingPage = props => {
    return(
        <div className="Landing-page-container">
            <HeaderSection />
            <ProjectCardContainer />
            <AboutSectionContainer />
            <Footer />
        </div>
    )
};


export default LandingPage;
