import { useState } from 'react';
import { Section } from './Section/Section';
import styles from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good) {
      return Math.round((good * 100) / countTotalFeedback());
    }
  };

  const incrementGoodRate = () => {
    setGood(prevGood => ++prevGood);
  };

  const incrementNeutralRate = () => {
    setNeutral(prevNeutral => ++prevNeutral);
  };

  const incrementBadRate = () => {
    setBad(prevBad => ++prevBad);
  };

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        incrementGoodRate();
        break;
      case 'neutral':
        incrementNeutralRate();
        break;
      case 'bad':
        incrementBadRate();
        break;

      default:
        console.log('error with incrementing rates');
    }

    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  return (
    <div className={styles.app}>
      <Section
        title=""
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={leaveFeedback}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      ></Section>
    </div>
  );
}

export default App;
