import React, { Component } from "react";

class Node extends Component {
  constructor(props) {
    this.state = {
      left: null,
      right: null,
      current: props.currentValue,
    };
  }
  render() {
    return <div>Node</div>;
  }
}

export default Node;
