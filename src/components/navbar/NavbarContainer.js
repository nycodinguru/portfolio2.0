import React, { Component } from "react";
import Navbar from "./Navbar";

export default class NavbarContainer extends Component {
  
componentDidMount(){
  window.addEventListener("scroll", this.revealNavbar);
}

componentWillUnmount(){
  window.removeEventListener("scroll", this.revealNavbar)
}

revealNavbar = () => {

  const globalNavbarContainer = document.querySelector('.Navbar-container-parent');
  const NavbarContainer = document.querySelector('.Navbar-container');
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
  if (window.scrollY >= 200) {
    globalNavbarContainer.style =
      "transition: 0.3s; height: 4rem; position: fixed; top: 0; z-index: 400; width: 100vw; opacity: 1; background: white;";
      NavbarContainer.style =
      "transition: 2.1s; opacity: 1;";
  }
  if (window.scrollY < 200) {
    globalNavbarContainer.style =
      "transition: 0.3s; height: 0; position: fixed; top: 0; z-index: 400; width: 100vw; opacity: 1; background: white;";
    NavbarContainer.style =
      "transition: 0s; opacity: 0;";
  } 
  if (window.scrollY < 110 ) {
    globalNavbarContainer.style =
      "z-index: -1000; transition: 0s; opacity: 0;";
  }
}

  render() {
    return (
      <Navbar />
    );
  }
}
