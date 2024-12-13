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
      question:
        "¿Qué acción es clave para reducir la acidificación de los océanos?",
      options: [
        "Incrementar el uso de combustibles fósiles",
        "Reducir las emisiones de CO₂ adoptando energías renovables",
        "Prohibir la pesca en todas las zonas costeras",
        "Fomentar el uso de plásticos biodegradables",
      ],
      answer: 1,
    },
    {
      question:
        "¿Cuál es la forma más efectiva de conservar el agua en el hogar?",
      options: [
        "Lavar el auto todos los días",
        "Cerrar el grifo mientras te cepillas los dientes",
        "Regar el jardín al mediodía",
        "Usar solo agua embotellada",
      ],
      answer: 1,
    },
    {
      question: "¿Qué es una práctica sostenible para la pesca?",
      options: [
        "Usar redes de arrastre masivo",
        "Respetar las temporadas de veda",
        "Pescar solo las especies más abundantes",
        "Pescar con dinamita para capturar más peces",
      ],
      answer: 1,
    },
    {
      question:
        "¿Cuál de las siguientes acciones ayuda a reducir el consumo de agua?",
      options: [
        "Reparar fugas de agua en casa",
        "Lavar la ropa todos los días",
        "Dejar la llave abierta al lavar platos",
        "Bañarse durante más de 30 minutos",
      ],
      answer: 0,
    },
    {
      question:
        "¿Qué elemento contribuye más a la contaminación de los océanos?",
      options: [
        "Residuos plásticos",
        "Restos de comida",
        "Arena de la playa",
        "Rocas marinas",
      ],
      answer: 0,
    },
    {
      question:
        "¿Qué organismo marino se ve más afectado por la contaminación por plásticos?",
      options: ["Tiburones", "Tortugas marinas", "Corales", "Medusas"],
      answer: 1,
    },
    {
      question:
        "¿Cuál es una forma responsable de deshacerse de los residuos electrónicos?",
      options: [
        "Tirarlos a la basura común",
        "Llevarlos a un centro de reciclaje especializado",
        "Dejarlos en la calle para que alguien los recoja",
        "Quemarlos para reducir el espacio que ocupan",
      ],
      answer: 1,
    },
    {
      question:
        "¿Cuál es una alternativa ecológica a las botellas de plástico de un solo uso?",
      options: [
        "Botellas de vidrio reutilizables",
        "Bolsas de plástico reutilizables",
        "Botellas de aluminio de un solo uso",
        "Botellas de cartón desechables",
      ],
      answer: 0,
    },
    {
      question:
        "¿Qué animal marino suele confundir el plástico con su alimento natural?",
      options: ["Delfines", "Ballenas", "Tortugas marinas", "Estrellas de mar"],
      answer: 2,
    },
    {
      question:
        "¿Cuál es el principal gas de efecto invernadero responsable del calentamiento global?",
      options: [
        "Dióxido de carbono (CO₂)",
        "Oxígeno (O₂)",
        "Ozono (O₃)",
        "Nitrógeno (N₂)",
      ],
      answer: 0,
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
      <div className="home-page-modelQ">
        <header className="waterQ-navbar-container">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
          <div className="button-section">
            <button className="buttonQ" onClick={goBack}>
              Volver
            </button>
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
              <button className="buttonQ" onClick={resetQuiz}>
                Intentar Nuevamente
              </button>
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
      </div>
    </>
  );
};

export default Quiz;
