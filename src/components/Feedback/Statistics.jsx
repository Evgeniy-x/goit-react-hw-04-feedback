import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        Good:
        <span> {good}</span>
      </p>
      <p>
        Neutral:
        <span> {neutral}</span>
      </p>
      <p>
        Bad:
        <span> {bad}</span>
      </p>
      <p>
        {' '}
        Total:
        <span> {total()}</span>
      </p>

      <p>
        {' '}
        Positive feedback:
        <span> {positivePercentage()}</span>
      </p>
    </div>
  );
};

export default Statistics;

Statistics.protoTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
