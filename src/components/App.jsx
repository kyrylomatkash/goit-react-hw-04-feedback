// Імпорт компонентів
import React, { useState } from 'react';
import Statistics from './feedback-component/feedback-statistic/FeedbackStatistics';
import FeedbackOptions from './feedback-component/feedback-options/FeedbackOptions';
import Section from './feedback-component/feedback-section/FeedbackSection';
import Notification from './feedback-component/feedback-notification/FeedbackNotification';
import { Container, CssBaseline, Typography } from '@mui/material';
// Основна функція застосунку
const App = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // Відображення фідбеку
  const handleFeedback = option => {
    setFeedbackState(prevCounts => ({
      ...prevCounts,
      [option]: prevCounts[option] + 1,
    }));
  };
  // Очищення фідбеку
  const handleClearStatistics = () => {
    setFeedbackState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const { good, neutral, bad } = feedbackState;
  const total = good + neutral + bad;
  const options = Object.keys(feedbackState);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Feedback App
        </Typography>
        <Section title="Leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={(good / total) * 100}
              onClearStatistics={handleClearStatistics}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </Container>
  );
};
// Експорт
export default App;
