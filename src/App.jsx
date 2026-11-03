
import React from 'react';
import { Component } from 'react';

class App extends Component {
  state = {
    count: 100
  }

  decreaseNumber = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 5
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Countdown</h1>
        <h2>{this.state.count}</h2>

        <button onClick={this.decreaseNumber}>
          Decrease by 5
        </button>
      </div>
    )
  }
}

export default App;
