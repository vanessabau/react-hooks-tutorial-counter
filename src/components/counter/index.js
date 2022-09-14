import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // this  is triggered when something is updated and you can make a new call to Ajax if you want new data
    //Helps decide if we need a new Ajax call
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("dont change");
    }
  }

  componentWillUnmount() {
    //opportunity for cleanup like timers ro listeners
    console.log("counter unmounted");
  }
  render() {
    console.log("counter rendered");
    let classes = this.getBadgeClasses();

    return (
      <div className="row">
        {this.props.children}
        <div className="col-1">
          <span style={{ fontSize: 20 }} className={classes}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            style={{ fontSize: 20 }}
            className="btn btn-secondary btn-sm"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </button>
          <button
            style={{ fontSize: 20 }}
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm p-2"
          >
            X
          </button>
        </div>
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
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
