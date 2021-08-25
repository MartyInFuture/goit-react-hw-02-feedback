import React, { Component } from 'react';
import Statistics from './statistics/Statistics.jsx';
import FeedbackOptions from './feedbackOptions/FeedbackOptions.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    negative: 0,
  };

  addGrade = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: (prevState[name] += 1),
        total: this.state.good + this.state.negative + this.state.neutral,
        rate: Math.floor(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.negative)) *
            100
        ),
      };
    });
  };

  render() {
    const { good, neutral, negative, rate = 0, total = 0 } = this.state;
    return (
      <div className="wrapper">
        <h1>Please leave feedback</h1>
        <FeedbackOptions onClickFunc={this.addGrade} />
        <Statistics
          good={good}
          neutral={neutral}
          negative={negative}
          rate={rate}
          total={total}
        />
      </div>
    );
  }
}

export default App;
