import React, { Component } from "react";
import Waypoint from "react-waypoint";

export default class Animation extends Component {
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
      550
    );
  };
  render() {
    return (
      <Waypoint
      scrollableAncestor={window}
      bottomOffset={this.props.bO ? this.props.bO : "15%"} 
      onEnter={this.bounceIn}>
        <div
          className={`Animation-container ${this.props.animationSubClass} ${
            this.state.className
          }`}
        >
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}
