import { useState } from 'react';
import Section from './Feedback/Section.jsx';
import FeedbackOptions from './Feedback/FeedbackOptions.jsx';
import Statistics from './Feedback/Statistics.jsx';
import Notification from './Feedback/Notification.jsx';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback) {
      return Math.round((good / countTotalFeedback) * 100) + '%';
    }
    return '0%';
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onGood={() => setGood(good + 1)}
          onNeutral={() => setNeutral(neutral + 1)}
          onBad={() => setBad(bad + 1)}
          // onLeaveFeedback={handleIncrease}
        ></FeedbackOptions>
      </Section>
      {countTotalFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}
