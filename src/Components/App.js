import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    negative: 0,
  };

  addGrade = (e) => {
    console.log(e.target.name);
    this.setState({
      grade: (this.state[e.target.name] += 1),
      rate:
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.negative)) *
        100,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Please leave feedback</h1>
        <div className="buttons">
          <button type="button" name="good" onClick={this.addGrade}>
            Good
          </button>
          <button type="button" name="neutral" onClick={this.addGrade}>
            Neutral
          </button>
          <button type="button" name="negative" onClick={this.addGrade}>
            Negative
          </button>
        </div>
        <h2>Statistics</h2>
        {this.state.rate === undefined ? (
          <p>No feedback given</p>
        ) : (
          <div className="grades">
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Negative: {this.state.negative}</p>
            <p>Positive feedback: {this.state.rate}%</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
