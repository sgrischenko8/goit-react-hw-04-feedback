import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const Section = ({
  title,
  good,
  neutral,
  bad,
  onLeaveFeedback,
  total,
  positivePercentage,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      {total() > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}

      <Notification message="There is no feedback" total={total}></Notification>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.func.isRequired,
};
