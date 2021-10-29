import { useState } from 'react';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedbackTypes = { good, bad, neutral };
  const options = Object.keys(feedbackTypes);

  const addFeedback = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + bad + neutral;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={addFeedback}
        ></FeedbackOptions>
      </Section>
      {total > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={percentage}
          ></Statistics>
        </Section>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </div>
  );
}
