const FeedbackOptions = ({ onClickFunc }) => {
  return (
    <div className="buttons">
      <button type="button" name="good" onClick={onClickFunc}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onClickFunc}>
        Neutral
      </button>
      <button type="button" name="negative" onClick={onClickFunc}>
        Negative
      </button>
    </div>
  );
};

export default FeedbackOptions;
