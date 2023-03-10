import React, { Component } from "react";
import Node from "./Node";
class LinkedList extends Component {
  constructor() {
    this.state = {
      node: "test",
      head: null,
      tail: null,
      length: 0,
    };
  }

  addToTail(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.right = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  render() {
    return <div>LinkedList</div>;
  }
}

export default LinkedList;
