import React, { Component } from "react";
import Navbar from "./Navbar";

export default class NavbarContainer extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      className: ""
    }
  }  
  
componentDidMount(){
  if (this.props.location.pathname.split("/")[1] !== "resume") window.addEventListener("scroll", this.revealNavbar);
}

componentWillUnmount(){
  if (this.props.location.pathname.split("/")[1] !== "resume") window.removeEventListener("scroll", this.revealNavbar);
}

revealNavbar = () => {

  const navbarContainerParent = document.querySelector('.Navbar-container-parent');
  const navbarContainer = document.querySelector('.Navbar-container');
  const portfolioUpperHeader = document.querySelector('.Header-header-upper') ? document.querySelector('.Header-header-upper') : null;
  const backToTop = document.querySelector('.Back-to-top');

  if (window.scrollY >= 10) {
    this.setState({ className: "scrolled" });
    if ( portfolioUpperHeader !== null ) portfolioUpperHeader.classList.add(this.state.className);
  }
  if (window.scrollY >= 15) {
    navbarContainerParent.classList.add(this.state.className);
    navbarContainer.classList.add(this.state.className);
  }
  if (window.scrollY < 15) {
    navbarContainerParent.classList.remove("scrolled");
    navbarContainer.classList.remove("scrolled");
    if ( portfolioUpperHeader !== null ) portfolioUpperHeader.classList.remove("scrolled");
  } 
  if (window.scrollY < 1500) {
    backToTop.classList.remove("scrolled");
  }
  if (window.scrollY >= 1500) {
    backToTop.classList.add(this.state.className);
  }
}

  render() {
    return (
      <Navbar />
    );
  }
}
