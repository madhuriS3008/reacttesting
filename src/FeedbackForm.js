import "./App.css";
import { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");
  const isDisabled = Number(score) < 5 && comment.length <= 10;

  const textareaPlaceholder = isDisabled
    ? "Please provide a comment explaining why the experience was not good. Minimum length is 10 characters."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ score, comment });
    setScore("10");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback Form</h2>
        <div className="field">
          <label htmlFor="score">Score: {score} ⭐</label>
          <input
            type="range"
            id="score"
            min="0"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Comments: </label>
          <textarea
            cols="30"
            rows="5"
            placeholder={textareaPlaceholder}
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button disabled={isDisabled}>Submit Feedback</button>
      </fieldset>
    </form>
  );
};

export default FeedbackForm;
