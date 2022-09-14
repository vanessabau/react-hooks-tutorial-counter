import React, { Component } from "react";
import "./App.css";

import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constuctor() {
    //super();
    console.log("app-constructor");
  }

  componentDidMount() {
    //Ajax method
    console.log("App-Mounted");
  }

  handleIncrement = (counter) => {
    // clone counters array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //modify the object at ourr counter index
    counters[index] = { ...counter };
    counters[index].value++;
    // update state
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    // clone counters array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //modify the object at ourr counter index
    counters[index] = { ...counter };
    counters[index].value--;
    // update state
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log("app-rendered");
    return (
      <>
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
