import PropTypes from 'prop-types';
import Notification from './notification/Notification';

const Statistics = ({ good, neutral, negative, rate, total }) => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      {rate === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <div className="grades">
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Negative: {negative}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {rate}%</p>
        </div>
      )}
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  negative: PropTypes.number,
  rate: PropTypes.number,
  total: PropTypes.number,
};
