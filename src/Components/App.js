import React, { Component } from 'react';
import Statistics from './statistics/Statistics.jsx';
import FeedbackOptions from './feedbackOptions/FeedbackOptions.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    negative: 0,
    rate: 0,
  };

  addGrade = (e) => {
    this.setState((prevState) => {
      return {
        [e.target.name]: (prevState[e.target.name] += 1),
        rate:
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.negative)) *
          100,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>Please leave feedback</h1>
        <FeedbackOptions onClickFunc={this.addGrade} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          negative={this.state.negative}
          rate={this.state.rate}
        />
      </div>
    );
  }
}

export default App;
