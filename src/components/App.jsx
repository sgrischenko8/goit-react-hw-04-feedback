import { useState } from 'react';
import { Section } from './Section';

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
    setGood(prevRate => {
      return prevRate + 1;
    });
  };

  const incrementNeutralRate = () => {
    setNeutral(prevRate => {
      return prevRate + 1;
    });
  };

  const incrementBadRate = () => {
    setBad(prevRate => {
      return prevRate + 1;
    });
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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
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
