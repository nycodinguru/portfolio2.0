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
    var globalNavContainer = document.querySelectorAll('.Navbar-container-parent')[0];
  
  
    if (window.scrollY >= 629) {
      globalNavContainer.style =
        "transition: 0.4s; height: 5rem; position: fixed; top: 0; z-index: 400; width: 100vw; opacity: 1; background: white;";
     
    }
  
    if (window.scrollY < 629) {
      globalNavContainer.style =
        "position: fixed; top: 0; transition: 0.4s; width: 100vw; opacity: 0; background: black !important;"
   
    } 
  }

  render() {
    return (
      <Navbar 
      scrollToTop={this.scrollToTop}
      />
    );
  }
}
