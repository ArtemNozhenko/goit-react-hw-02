import { useState, useEffect } from "react";
import "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saveFeedback = localStorage.getItem("feedback");
    return saveFeedback !== null
      ? JSON.parse(saveFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "feedback",
      JSON.stringify(feedback)
    );
  }, [feedback]);

  const totalFeedback =
    feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round(
    (feedback.good / totalFeedback) * 100
  );

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
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
