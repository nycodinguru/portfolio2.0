import React from "react";


const Footer = () => {
  return (
    <div className="Footer-parent">
      <div className="Footer-container">
        <p className="Footer-links">
          <a href="https://github.com/nycodinguru" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Github"> github</span>
          </a> 
          <a href="https://www.linkedin.com/in/rashadrose/" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Linkedin">linkedin</span> 
          </a>
          <a href="https://angel.co/rashad-rose" target="_blank" rel="noopener noreferrer">
          <span className="Contact-span Angel-list">angel list</span> 
          </a> 
          <a href="https://www.instagram.com/rozvyyy/" target="_blank" rel="noopener noreferrer">
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