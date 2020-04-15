import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onIncreament,
      onDelete,
      counters,
      onDecreament,
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-lg m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncreament={onIncreament}
            onDecreament={onDecreament}
          >
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
