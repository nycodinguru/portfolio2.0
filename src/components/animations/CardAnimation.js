import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class CardAnimation extends Component {
  constructor() {
    super();
    this.state = {
      className: ""
    };
  }
  bounceIn = () => {
    setTimeout(
      () =>
        this.setState({
          className: this.props.animationClass ? this.props.animationClass : "animation",
        }),
      975
    );
  };
  render() {
    return (
      <Waypoint
      scrollableAncestor={window}
      bottomOffset={"15%"} 
      onEnter={this.bounceIn}>
        <div
          className={`${this.props.animationSubClass} ${
            this.state.className
          }`}
        >
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}
