import "./Quiz.css";
import groupLogo from "../../assets/Icon.png";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "¿Qué acción es clave para reducir la acidificación de los océanos?",
      options: [
        "Incrementar el uso de combustibles fósiles",
        "Reducir las emisiones de CO₂ adoptando energías renovables",
        "Prohibir la pesca en todas las zonas costeras",
        "Fomentar el uso de plásticos biodegradables",
      ],
      answer: 1,
    },
   
  ];

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  return (
    <>
      <header className="waterQ-navbar-container">
        <img src={groupLogo} alt="Logo del proyecto" className="logo" />
        <h3 className="project-title">HYDRONET</h3>
        <div className="button-section">
          <button className="buttonQ" onClick={goBack}>Volver</button>
        </div>
      </header>

      <div className="space">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(score / questions.length) * 100}%` }}
          >
            {((score / questions.length) * 100).toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            <h2>¡Has terminado!</h2>
            <p>
              Obtuviste {score} de {questions.length} respuestas correctas.
            </p>
            <button className="buttonQ" onClick={resetQuiz}>Intentar Nuevamente</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>
              Pregunta {currentQuestion + 1} de {questions.length}
            </h2>
            <p>{questions[currentQuestion].question}</p>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="buttonQ"
                  onClick={() => handleAnswerOptionClick(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;