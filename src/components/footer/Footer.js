import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Footer = props => {
  const { info } = props;

  return (
    <div className="Footer-parent">
      <div className="Footer-container">
        <p className="Footer-links">
          <a href="https://github.com/nycodinguru" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Github"> github </span>
          </a> 
          <span> / </span> 
          <a href="https://www.linkedin.com/in/rashad-rose/" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Linkedin">linkedin </span> 
          </a>
          <span> / </span> 
          <a href="https://stackoverflow.com/users/story/9969370" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Stack-overflow">stack overflow </span> 
          </a>
          <span> / </span> 
          <a href="#" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Instagram">instagram</span> 
          </a>
        </p>
        <div className="Footer-container-bottom-text">
        <p> &copy; 2019, RASHAD ROSE.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;