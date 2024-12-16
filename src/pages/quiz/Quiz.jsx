import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import { Canvas } from "@react-three/fiber";
import Lights from "../../Components/ComponentsScarcity/Lights";
import Boat from "../../Components/ComponentsQuiz/Boat";
import Ocean1 from "../../Components/ComponentsQuiz/Ocean1";
import Paper from "../../Components/ComponentsQuiz/Paper";
import Bottle2 from "../../Components/ComponentsScarcity/Bottle2";
import Qestions from "../../Components/ComponentsQuiz/Qestions";
import { OrbitControls, Stars } from "@react-three/drei";
import "./Quiz.css";

const Quiz = () => {
  const navigate = useNavigate();
  const cameraRef = useRef();

  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [boatPosition, setBoatPosition] = useState([0, 0, 35]);

  const paperPositions = [
    [-15, 5, -15],
    [10, 5, 10],
    [20, 5, 20],
    [-20, 5, -5],
    [-10, 5, 10],
    [-25, 5, 5],
    [15, 5, 25],
    [-30, 5, 15],
    [5, 5, 25],
    [-20, 5, 25],
    [10, 5, -15],
    [-10, 5, 20],
    [25, 5, -10],
    [-30, 5, -20],
    [30, 5, 0],
  ];

  const bottlePositions = [
    [-15, 0, 5],
    [3, 0, 25],
    [15, 0, -20],
    [-20, 0, 0],
    [18, 0, 15],
    [-25, 0, -10],
    [10, 0, 20],
    [-30, 0, 25],
    [20, 0, -15],
    [25, 0, 10],
    [0, 0, 18],
    [-20, 0, 10],
    [5, 0, -25],
    [8, 0, 5],
    [-30, 0, 10],
    [-5, 0, 30],
    [0, 0, -25],
    [25, 0, -5],
    [-10, 0, -15],
    [15, 0, -10],
  ];

  const goBack = () => {
    navigate(-1);
  };

  const startGame = () => {
    setShowLoadingScreen(false);
  };

  const handleRestart = () => {
    setScore(0);
    setGameOver(false);
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 10);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const scale = [8, 8, 8];

  useEffect(() => {
    if (gameOver) {
      if (score >= 80) {
        setQuizComplete(true);
      } else {
        setGameOver(true);
      }
    }
  }, [gameOver, score]);

  return (
    <div className="home-page-modelQ">
      <header className="waterQ-navbar-container">
        <img src={groupLogo} alt="Logo del proyecto" className="logo" />
        <h3 className="project-title">HYDRONET</h3>
        <div className="button-section">
          <button className="buttonQ" onClick={goBack}>
            Volver
          </button>
          <p>Puntaje: {score}</p>
        </div>
      </header>

      {showLoadingScreen ? (
        <div className="loading-screen">
          <h1>¡Bienvenido al Quiz!</h1>
          <p>Instrucciones:</p>
          <ul>
            <li>Usa las flechas de dirección para mover la barca.</li>
            <li>
              Recoge el cubo de color de la respuesta correcta para ganar.
            </li>
            <li>Diviértete y aprende sobre el cuidado del agua.</li>
          </ul>
          <button onClick={startGame} className="start-game-button">
            Iniciar Juego
          </button>
        </div>
      ) : (
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
          camera={{ position: [0, 20, 30], fov: 100 }}
          ref={cameraRef}
          shadows
        >
          <Lights />
          <ambientLight intensity={0.9} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} />
          <Stars />
          <OrbitControls />
          <Ocean1 />
          <Boat position={boatPosition} />
          <Qestions
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            setScore={setScore}
            setGameOver={setGameOver}
            setQuizComplete={setQuizComplete}
            handleAnswer={handleAnswer}
          />
          {paperPositions.map((position, index) => (
            <Paper key={index} position={position} scale={scale} />
          ))}
          {bottlePositions.map((position, index) => (
            <Bottle2 key={index} position={position} scale={scale} />
          ))}
        </Canvas>
      )}

      {quizComplete && score >= 80 ? (
        <div className="end-game-screen">
          <h2>¡Felicidades! Has completado el quiz.</h2>
          <button onClick={handleGoHome}>Volver al Home</button>
        </div>
      ) : (
        gameOver && (
          <div className="end-game-screen">
            <h2>¡Perdiste! Intenta nuevamente.</h2>
            <button onClick={handleRestart}>Repetir Preguntas</button>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;