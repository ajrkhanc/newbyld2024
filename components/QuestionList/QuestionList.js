// components/QuestionList.jsx
import React, { useState } from "react";
import styles from "../../styles/coachKnowledge.module.css";
const QuestionList = ({
  questions,
  scenarioId,
  selectedAnswers,
  setSelectedAnswersPerScenario,
}) => {
  const handleOptionChange = (qIndex, optIndex) => {
    setSelectedAnswersPerScenario((prev) => ({
      ...prev,
      [scenarioId]: {
        ...(prev[scenarioId] || {}),
        [qIndex]: optIndex,
      },
    }));
  };

  return (
    <div>
      {questions.map((q, qIndex) => (
        <div key={qIndex} className={styles.questionCard}>
          <div className={styles.questionTitle}>
            {qIndex + 1}. {q.question}
          </div>
          <div>
            {q.options.map((opt, optIndex) => (
              <label
                key={optIndex}
                className={`${styles.option} ${
                  selectedAnswers[qIndex] === optIndex ? styles.selected : ""
                }`}
              >
                <input
                  type="radio"
                  name={`question-${scenarioId}-${qIndex}`}
                  value={opt.value}
                  checked={selectedAnswers[qIndex] === optIndex}
                  onChange={() => handleOptionChange(qIndex, optIndex)}
                  required
                />
                {opt.text}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
