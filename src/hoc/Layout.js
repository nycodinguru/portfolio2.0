import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavbarContainer from "../components/navbar/NavbarContainer";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavbarContainer />
        {this.props.children}
        {/* <Footer/> */}
      </Fragment>
    );
  }
}
export default withRouter(Layout);
