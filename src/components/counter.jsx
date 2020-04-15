import React, { Component } from "react";
import Like from "./common/like";

class Counter extends Component {
  styles = {
    fontSize: 20,
  };
  rendertags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncreament(this.props.counter)}
          className="btn btn-success btn-lg"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDecreament(this.props.counter)}
          className="btn btn-success btn-lg m-2"
          disabled={this.props.counter.value === 0 ? "disabled" : null}
        >
          Decreament
        </button>
        <Like liked={true}></Like>
        <button
          className="btn btn-danger btn-lg"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.rendertags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
