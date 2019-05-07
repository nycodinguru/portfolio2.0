import React from "react";
import { withRouter } from "react-router-dom";
import Scrollchor from 'react-scrollchor';


const Navbar = props => {
    return (
    <header className="Navbar-container-parent">
      <div className="Navbar-container">
        <Scrollchor to="" animate={{offset: 0, duration: 400}}>
          <div id="rashad-rose">rashad rose.</div>
        </Scrollchor>
        <Scrollchor to="#Contact" animate={{offset: 0, duration: 400}}>
          <div className="Button">contact</div>
        </Scrollchor>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
