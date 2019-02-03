import React, { Component } from 'react';
import './styles/index.scss';
import { Switch, Route, withRouter } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPageContainer"

class App extends Component {
  render() {
    return (
      <Route>
          <Switch>
          <Route
              exact
              path="/"
              render={ props => <LandingPage {...props} />}
            />
          </Switch>
      </Route>
    );
  }
}

// render() {
//   let routes = (
//     <Route
//       render={({ location }) => (
//         <Fragment>
//           <main>
//             <TransitionGroup
//               component={null}
//             >
//             <CSSTransition
//                   key={location.key}
//                   classNames=""
//                   timeout={transitionTime}
//                   onEnter={() => {
//                     this.setState({
//                       transition: true
//                     });
//                     setTimeout(
//                       () =>
//                         this.props.location.hash
//                           ? false
//                           : window.scrollTo(0, 0),
//                       500
//                     );
//                   }}
//                   onExited={() => {
//                     this.setState({
//                       transition: false
//                     });
//                   }}
//                 >
//                 <Switch location={location}>
//                 <Route
//                   exact
//                   path="/"
//                   render={ props => (
//                     <LandingPage 
//                     {...props} 
//                     />
//                     )}
//                 />
//                 <Route
//                   path="/#"
//                   render={ props => (
//                     <LandingPage 
//                     {...props} 
//                     />
//                     )}
//                 />
//                 </Switch>
//               </CSSTransition>
//             </TransitionGroup> 
//           </main> 
//         </Fragment>
//       )}
//     />
//   );

//   return <Layout>{routes}</Layout>;

// }

export default withRouter(App);
