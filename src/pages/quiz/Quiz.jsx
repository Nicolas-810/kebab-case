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
        "¿Cuál es una de las principales consecuencias de la acidificación para las especies marinas?",
      options: [
        "Aumento de la biodiversidad ",
        "Mejora en la reproducción de especies ",
        "Dificultad para formar caparazones y esqueletos de carbonato de calcio",
        "E Mayor resistencia a cambios ambientales  ",
      ],
      answer: 2,
    },

    {
      question:
        "¿Cómo afecta la acidificación de los océanos a las comunidades costeras?",
      options: [
        "Reduce el turismo pero mejora la pesca",
        "Protege las costas contra tormentas y erosión",
        "Amenaza la economía y la seguridad alimentaria",
        "Disminuye la diversidad pero no afecta a las personas",
      ],
      answer: 2,
    },

    {
      question:
        "¿Cuál es la principal causa de la acidificación de los océanos?",
      options: [
        "La sobrepesca",
        "El aumento del dióxido de carbono (CO₂) en la atmósfera",
        "La contaminación plástica  ",
        "El aumento de la temperatura del agua ",
      ],
      answer: 1,
    },

    {
      question:
        "¿Cuál es una estrategia efectiva para reducir la contaminación del agua causada por la agricultura?",

      options: [
        "Utilizar fertilizantes y pesticidas sintéticos en mayores cantidades",
        "Promover técnicas de agricultura sostenible, como fertilizantes orgánicos",
        "Incrementar la deforestación cercana a campos agrícolas",
        "Construir más fábricas cerca de fuentes de agua",
      ],
      answer: 1,
    },

    {
      question:
        "¿Cuál de las siguientes es una causa principal de la contaminación del agua?",

      options: [
        "El uso de detergentes biodegradables en el hogar",
        "La presencia de árboles cerca de cuerpos de agua",
        "El vertido de desechos industriales no tratados en ríos y mares",
        "La instalación de sistemas de filtración avanzados en plantas de tratamiento",
      ],
      answer: 2,
    },

    {
      question:
        "¿Qué ocurre cuando sustancias dañinas ingresan en cuerpos de agua como ríos, lagos y océanos?",
      options: [
        "Mejoran la calidad del agua",
        "Favorecen el crecimiento de ecosistemas acuáticos",
        "Generan agua potable más rápidamente",
        "Pueden volverse peligrosos para humanos, vida silvestre y el medio ambiente",
      ],
      answer: 3,
    },

    {
      question: "¿Cuáles son algunos de los efectos de la escasez de agua?",
      options: [
        "Mejora la producción de alimentos",
        "Aumenta la estabilidad económica global",
        "Puede provocar crisis humanitarias y conflictos",
        "Facilita el acceso al agua limpia",
      ],
      answer: 2,
    },
    {
      question:
        "¿Cuál de las siguientes es una solución para la escasez de agua?",
      options: [
        "Incrementar el uso de agua en procesos industriales",
        "Reutilizar aguas residuales tratadas",
        "Contaminar fuentes de agua para acelerar su renovación",
        "Reducir la desalinización en zonas costeras",
      ],
      answer: 1,
    },
    {
      question:
        "¿Por qué es importante proteger las fuentes naturales de agua?",
      options: [
        "Para asegurar su disponibilidad a largo plazo",
        "Para desviar el agua hacia zonas urbanas",
        "Para permitir la contaminación controlada",
        "Para reducir la biodiversidad en los ecosistemas",
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
      <header className="waterQ-navbar-container">
        <img src={groupLogo} alt="Logo del proyecto" className="logo" />
        <h3 className="project-title">HYDRONET</h3>
        <div className="button-section">
          <button onClick={goBack} className="button-Quiz">Volver</button>
        </div>
      </header>

      <div className="space">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(score / questions.length) * 100}%` }}>
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
            <button onClick={resetQuiz} className="button-Quiz" >Intentar Nuevamente</button>
          </div>
        ) : (
          <div className="question-section">
            <h2>
              Pregunta {currentQuestion + 1} de {questions.length}
            </h2>
            <p>{questions[currentQuestion].question}</p>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option, index) => (
                <button className="button-Quiz"
                  key={index}
                  onClick={() => handleAnswerOptionClick(index)}>
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
