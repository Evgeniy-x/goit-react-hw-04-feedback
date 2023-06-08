import css from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button className={css.btn} name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={css.btn} name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={css.btn} name="bad" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.protoTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
