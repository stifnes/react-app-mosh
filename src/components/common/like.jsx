import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let classes = "btn-outline-dark";
    if (!this.props.liked) classes = "btn-dark";
    return <button className={"btn mr-2 btn-lg " + classes}>Like</button>;
  }
}

export default Like;
