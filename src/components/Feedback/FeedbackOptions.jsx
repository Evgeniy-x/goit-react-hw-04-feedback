import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <div>
      <button className={css.btn} name="good" onClick={onGood}>
        Good
      </button>
      <button className={css.btn} name="neutral" onClick={onNeutral}>
        Neutral
      </button>
      <button className={css.btn} name="bad" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
