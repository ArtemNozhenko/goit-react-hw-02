import { useState } from "react";
import "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (option) => {
    setFeedback({
      ...feedback,
      [option]: feedback[option] + 1,
    });
  };

  const totalFeedback =
    feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
