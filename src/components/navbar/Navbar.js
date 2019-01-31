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
        <a href="mailto:rashadd.rose@gmail.com" target="_top"><div className="Button">contact</div></a>
      </div>
    </header>
  );
};

export default withRouter(Navbar);
