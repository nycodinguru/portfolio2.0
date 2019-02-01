import React, { Component } from "react";
import Navbar from "./Navbar";

export default class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.revealGlobalNav = this.revealGlobalNav.bind(this);
  }
  
  componentDidMount(){
    window.addEventListener("scroll", this.revealGlobalNav);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.revealGlobalNav)
  }

  revealGlobalNav() {
    const globalNavContainer = document.querySelectorAll('.Navbar-container-parent')[0];
    const portfolioUpperHeader = document.querySelector('.Header-header-upper');

    if (window.scrollY >= 130) {
      portfolioUpperHeader.style =
        "opacity: 0 !important;";
    }
    if (window.scrollY < 130) {
      portfolioUpperHeader.style =
        "opacity: 1 !important;";
    }
    if (window.scrollY >= 200) {
      portfolioUpperHeader.style =
        "display: none";
    }
    if (window.scrollY < 200) {
      portfolioUpperHeader.style =
        "display: block";
    }
    if (window.scrollY >= 629) {
      globalNavContainer.style =
        "transition: 0.4s; height: 4rem; position: fixed; top: 0; z-index: 400; width: 100vw; opacity: 1; background: white;";
    }
    if (window.scrollY < 629) {
      globalNavContainer.style =
        "position: fixed; top: 0; transition: 0.4s; width: 100vw; opacity: 0; background: black !important;"
    } 
  }

  render() {
    return (
      <Navbar />
    );
  }
}
