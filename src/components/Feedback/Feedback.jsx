export default function Feedback({
  feedback: { good, neutral, bad },
  positiveFeedback,
}) {
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>positive: {positiveFeedback}%</li>
    </ul>
  );
}
