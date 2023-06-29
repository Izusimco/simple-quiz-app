import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Salvador Dalí",
      ],
      answer: "Leonardo da Vinci",
    },

    {
      question: "When did Nigeria had her indepedent?",
      options: ["1960", "1943", "1962", "1952"],
      answer: "1960",
    },

    {
      question: "Who is the founder of facebook",
      options: ["Elon Musk", "Jack Dorsey", "Barack Obama", "Mark Zukerberg"],
      answer: "Mark Zukerberg",
    },
    {
        question: 'Who invented Javascript',
        options: ['James Macmillan', 'Brenda Eich', 'Alan Smith', 'John Winshere'],
        answer: 'Brenda Eich'
    }

  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");
    setCurrentQuestion(currentQuestion + 1);

    if (currentQuestion === questions.length - 1) {
      setShowScore(true);
    }
  };

  return (
    <div className=" quiz-container">
      {showScore ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score is: {score}</p>
        </div>
      ) : (
        <div >
          <h2>Question {currentQuestion + 1}</h2>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} >
              <button
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== ""}
              >
                {option}
              </button>
            </div>
          ))}
          <button onClick={handleNextQuestion} disabled={selectedOption === ""}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
