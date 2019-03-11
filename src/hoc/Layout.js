import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


class Layout extends Component {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}
export default withRouter(Layout);
