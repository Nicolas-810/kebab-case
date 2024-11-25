import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Fish3D from "../../Components/logo-3d/Fish3D";
import Bottle from "../../Components/Bottle";
import Desert from "../../Components/Desert";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import collisionSound from "../../assets/Burbujas.mp3";
import { useNavigate } from "react-router-dom";
import "./ModelScarcity.css";
import TitleWaterScarcity3D from "../../Components/logo-3d/TitleWaterScarcity3D";
import TitleWaterScarcity from "../../Components/logo-3d/TitleWaterScarcity";


const ModelScarcity = () => {
  const [playCollision] = useSound(collisionSound, { volume: 1 });

  const [gameStarted, setGameStarted] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const bottleRef = useRef();
  const [score, setScore] = useState(0);
  const [bottlesCollected, setBottlesCollected] = useState(0);
  const [thirst, setThirst] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const [bottlePosition, setBottlePosition] = useState([Math.random() * 30 - 15, 0, Math.random() * 30 - 15]);

  const navigate = useNavigate();

  const handleCollision = () => {
    if (gameOver || gameWon) return;

    playCollision();
    setScore((prev) => {
      const newScore = prev + 10;
      if (newScore >= 100) {
        setGameWon(true);
        setGameStarted(false);
      }
      return newScore;
    });
    setBottlesCollected((prev) => prev + 1);
    setThirst((prev) => Math.min(prev + 20, 100));

    setBottlePosition([Math.random() * 30 - 15, 0, Math.random() * 30 - 15]);
  };

  useEffect(() => {
    if (gameStarted && !gameWon) {
      const interval = setInterval(() => {
        setThirst((prev) => {
          if (prev <= 0) {
            setGameOver(true);
            setGameStarted(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, gameWon]);

  useEffect(() => {
    if (gameWon) {
      const timer = setTimeout(() => {
        navigate("/WaterScarcity");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [gameWon, navigate]);

  const startGame = () => {
    setShowLoadingScreen(false);
    setGameStarted(true);
  };

  return (
    <div className="home-page-modelS">
      {showLoadingScreen ? (
        <div className="loading-screen">
          <h1>¡Bienvenido a la Escasez!</h1>
          <p>Instrucciones:</p>
          <ul>
            <li>Usa las flechas de dirección para mover al niño.</li>
            <li>Recoge botellas de agua para mantener tu nivel de sed alto.</li>
            <li>Evita quedarte sin agua, ¡o perderás el juego!</li>
          </ul>
          <button onClick={startGame} className="start-game-button">
            Iniciar Juego
          </button>
        </div>
      ) : (
        <Canvas camera={{ position: [0, 10, 30], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 20, 10]} intensity={1.5} />
          <Desert />
          <Stars />

          {gameStarted && (
            <>
              <TitleWaterScarcity
                text={`Puntaje: ${score}`}
                position={[-10, 10, -20]}
                size={1.5}
                color="green"
              />
              <TitleWaterScarcity
                text={`Sed: ${thirst}%`}
                position={[10, 10, -20]}
                size={1.5}
                color="red"
              />
              <TitleWaterScarcity
                text={`Botellas recogidas: ${bottlesCollected}`}
                position={[0, 5, -20]}
                size={1.5}
                color="orange"
              />
            </>
          )}

          {gameOver && !gameWon && (
            <TitleWaterScarcity
              text="¡Juego Terminado! Te quedaste sin agua."
              position={[0, 10, 0]}
              size={2}
              color="red"
            />
          )}

          {gameWon && (
            <TitleWaterScarcity3D
              text="¡Felicidades! Has ganado."
              position={[0, 10, 0]}
              size={2}
              color="green"
            />
          )}

          {gameStarted && !gameOver && !gameWon && (
            <Bottle
              position={bottlePosition}
              onCollect={handleCollision}
              bottleRef={bottleRef}
            />
          )}

          <Fish3D
            rocks={[bottleRef]}
            position={[0, 0, 0]}
            onCollision={handleCollision}
          />
        </Canvas>
      )}
    </div>
  );
};

export default ModelScarcity;