import React, { Component, Fragment } from 'react';
import './styles/index.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import Layout from './hoc/Layout';
import NavbarContainer from "./components/navbar/NavbarContainer";
import LandingContainer from './components/landingpage/LandingPageContainer';
import Resume from './components/resume/Resume';
import BackToTop from './components/backtotop/BackToTop';

class App extends Component {
  render() {
    let routes = (
      <Route
        render={ (props) => (
              <Fragment>
                <NavbarContainer 
                  {...props}
                />
                <BackToTop />
                <Switch>
                <Route
                    exact
                    path="/"
                    render={ props => <LandingContainer {...props} />}
                  />
                  <Route
                    exact
                    path="/resume"
                    render={ props => <Resume />}
                  />
                </Switch>
              </Fragment>
            )}
          />
      )

      return <Layout>{routes}</Layout>;
  }
}

export default withRouter(App);