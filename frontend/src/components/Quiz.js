import React, { useState, useEffect } from 'react';

function Quiz({ characters }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (characters.length > 0) {
      const generatedQuestions = generateQuestions(characters);
      setQuestions(generatedQuestions);
    }
  }, [characters]);

  const generateQuestions = (chars) => {
    const questions = chars.map(char => ({
      questionText: `Who portrays the character ${char.name}?`,
      answerOptions: shuffleArray([
        { answerText: char.portrayer, isCorrect: true },
        ...getRandomPortrayers(chars, char.portrayer, 3)
      ])
    }));
    return shuffleArray(questions).slice(0, 5); 
  };

  const getRandomPortrayers = (chars, correct, count) => {
    const incorrectPortrayers = chars
      .filter(c => c.portrayer !== correct)
      .map(c => ({ answerText: c.portrayer, isCorrect: false }));
    return shuffleArray(incorrectPortrayers).slice(0, count);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    const newQuestions = generateQuestions(characters);
    setQuestions(newQuestions);
  };

  if (questions.length === 0) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div className="quiz">
      <h2>VICTORiOUS Cast Quiz</h2>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;