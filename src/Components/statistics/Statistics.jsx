const Statistics = ({ good, neutral, negative, rate }) => {
  return (
    <div className="statistics">
      <h2>Statistics</h2>
      {rate === undefined ? (
        <p>No feedback given</p>
      ) : (
        <div className="grades">
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Negative: {negative}</p>
          <p>Positive feedback: {rate}%</p>
        </div>
      )}
    </div>
  );
};

export default Statistics;
