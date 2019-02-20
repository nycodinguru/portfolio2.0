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
  window.addEventListener("scroll", this.revealNavbar);
}

componentWillUnmount(){
  window.removeEventListener("scroll", this.revealNavbar)
}

revealNavbar = () => {

  const navbarContainerParent = document.querySelector('.Navbar-container-parent');
  const navbarContainer = document.querySelector('.Navbar-container');
  const portfolioUpperHeader = document.querySelector('.Header-header-upper');

  if (window.scrollY >= 130) {
    this.setState({ className: "scrolled" });
    portfolioUpperHeader.classList.add(this.state.className);
  }
  if (window.scrollY >= 200) {
    navbarContainerParent.classList.add(this.state.className);
    navbarContainer.classList.add(this.state.className);
    
  }
  if (window.scrollY < 200) {
    navbarContainerParent.classList.remove("scrolled");
    navbarContainer.classList.remove("scrolled");
    portfolioUpperHeader.classList.remove("scrolled");
  } 
}

  render() {
    return (
      <Navbar />
    );
  }
}
