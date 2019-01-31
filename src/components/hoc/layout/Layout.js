import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Footer from "../../footer/Footer";
//
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Footer/>
      </Fragment>
    );
  }
}

export default withRouter(Layout);
