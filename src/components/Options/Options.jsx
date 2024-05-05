import css from "./Options.module.css";
export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.container}>
      <button
        onClick={() => updateFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="reset">
          Reset
        </button>
      )}
    </div>
  );
}
