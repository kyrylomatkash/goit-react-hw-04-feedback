// Імпорт
import React, { useState, useEffect } from 'react';
import { StyledButtonGroup, StyledButton } from './feedbackoptionsstyles';
// Функція фідбеку для кнопок
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [feedbackType, setFeedbackType] = useState(null);

  const handleClick = option => {
    setFeedbackType(option);
  };

  useEffect(() => {
    if (feedbackType !== null) {
      onLeaveFeedback(feedbackType);
      setFeedbackType(null);
    }
  }, [feedbackType, onLeaveFeedback]);

  return (
    <StyledButtonGroup>
      {options.map(option => (
        <StyledButton
          key={option}
          onClick={() => handleClick(option)}
          feedbackType={option}
        >
          {option}
        </StyledButton>
      ))}
    </StyledButtonGroup>
  );
};
// Експорт
export default FeedbackOptions;
