import { Component } from 'react';
import Section from './Feedback/Section.jsx';
import FeedbackOptions from './Feedback/FeedbackOptions.jsx';
import Statistics from './Feedback/Statistics.jsx';
import Notification from './Feedback/Notification.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrease = e => {
    const current = e.target.name;
    this.setState(prevState => {
      return { [current]: prevState[current] + 1 };
    });
  };

  countTotalFeedback = () => {
    const initialValue = 0;
    return Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      initialValue
    );
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback()) {
      return (
        Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'
      );
    }
    return '0%';
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleIncrease}
          ></FeedbackOptions>
        </Section>
        {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
