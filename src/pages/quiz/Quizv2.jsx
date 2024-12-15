import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import collisionSound from "../../assets/EfectoAgua.mp3";
import collisionSound2 from "../../assets/damage.mp3";
import soundD from "../../assets/Desert.mp3";
import { useNavigate } from "react-router-dom";
import "./Quizv2.css";
import TitleWaterScarcity3D from "../../Components/logo-3d/TitleWaterScarcity3D";
import TitleWaterScarcity from "../../Components/logo-3d/TitleWaterScarcity";
import Grass from "../../Components/ComponentsScarcity/Grass";
import Cactus from "../../Components/ComponentsScarcity/Cactus";
import Fish3D from "../../Components/ComponentsScarcity/Fish3D";
import Bottle from "../../Components/ComponentsScarcity/Bottle";
import Bottle2 from "../../Components/ComponentsScarcity/Bottle2";
import Desert from "../../Components/ComponentsScarcity/Desert";
import muteIcon from "../../assets/mute.png";
import soundIcon from "../../assets/sound.png";
import { Physics } from "@react-three/rapier";
import Lights from "../../Components/ComponentsScarcity/Lights";
import PostProcessing from "../../Components/ComponentsScarcity/PostProcessing";
import ModelWithInteraction from "../../Components/logo-3d/Qestions";

const ModelScarcity = () => {
  const [playCollision] = useSound(collisionSound, { volume: 1 });
  const [playCollision2] = useSound(collisionSound2, { volume: 1 });
  const [playSound, { stop, isPlaying }] = useSound(soundD, {
    volume: 2,
    loop: true,
  });

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [isPostProcessingEnabled, setIsPostProcessingEnabled] = useState(true); // Estado para PostProcessing
  const bottleRef = useRef();
  const bottleRef2 = useRef();
  const [score, setScore] = useState(0);
  const [bottlesCollected, setBottlesCollected] = useState(0);
  const [thirst, setThirst] = useState(100);
  const [life, setLife] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const [bottlePosition, setBottlePosition] = useState([
    Math.random() * 20 - 10,
    0,
    Math.random() * 20 - 10,
  ]);

  const [bottle2Position, setBottle2Position] = useState([
    Math.random() * 30 - 10,
    0,
    Math.random() * 30 - 10,
  ]);

  const navigate = useNavigate();

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const togglePostProcessing = () => {
    setIsPostProcessingEnabled((prev) => !prev);
  };

  useEffect(() => {
    if (soundEnabled) {
      if (!isPlaying) {
        playSound();
      }
    } else {
      stop();
    }
  }, [soundEnabled, playSound, stop, isPlaying]);

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
    setThirst((prev) => Math.min(prev + 10, 100));

    setBottlePosition([Math.random() * 30 - 10, 0, Math.random() * 30 - 10]);
  };

  const handleCollision2 = () => {
    if (gameOver || gameWon) return;

    playCollision2();

    setScore((prev) => prev - 10);
    setBottlesCollected((prev) => prev + 1);
    setLife((prev) => Math.max(prev - 10, 0));
    setThirst((prev) => Math.max(prev - 20, 0));

    setBottle2Position([Math.random() * 30 - 10, 0, Math.random() * 30 - 10]);
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

  useEffect(() => {
    if (gameOver && !gameWon) {
      const timer = setTimeout(() => {
        navigate("/WaterScarcity");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [gameOver, gameWon, navigate]);

  const startGame = () => {
    setShowLoadingScreen(false);
    setGameStarted(true);
  };

  const fixedGrassPositions = [
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

  const fixedCactusPositions = [
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
        <>
          <div
            onClick={toggleSound}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 10,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "transparent",
              fontSize: "16px",
              color: "white",
              border: "transparent",
            }}
          >
            Sonido:{" "}
            {soundEnabled ? (
              <img
                src={soundIcon}
                alt="Sound Icon"
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
              />
            ) : (
              <img
                src={muteIcon}
                alt="Mute Icon"
                style={{ width: "20px", height: "20px", marginLeft: "5px" }}
              />
            )}
          </div>

          <button
            onClick={togglePostProcessing}
            style={{
              position: "absolute",
              top: "70px",
              left: "20px",
              zIndex: 10,
              cursor: "pointer",
              padding: "10px",
              backgroundColor: "transparent",
              fontSize: "16px",
              color: "white",
              border: "transparent",
            }}
          >
            Efectos: {isPostProcessingEnabled ? "On" : "Off"}
          </button>

          <Canvas camera={{ position: [0, 10, 50], fov: 50 }} shadows>
            <Lights />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 20, 10]} intensity={1.5} />
            <Stars />
            {isPostProcessingEnabled && <PostProcessing />}
            <Physics>
              <Desert />
              {fixedGrassPositions.map((pos, index) => (
                <Grass key={index} position={pos} scale={[0.5, 0.5, 0.5]} />
              ))}

              {fixedCactusPositions.map((pos, index) => (
                <Cactus key={index} position={pos} scale={[0.5, 0.5, 0.5]} />
              ))}

              <Fish3D
                bottleRef={bottleRef}
                bottleRef2={bottleRef2}
                position={[0, 0, 35]}
                onCollision={handleCollision}
              />
            </Physics>
            {gameStarted && (
              <>
                <TitleWaterScarcity
                  text={`Puntaje: ${score}`}
                  position={[30, 20, -20]}
                  size={1.5}
                  color="orange"
                />
                <TitleWaterScarcity
                  text={`Agua: ${thirst}%`}
                  position={[50, 20, -20]}
                  size={1.5}
                  color="blue"
                />
                <TitleWaterScarcity
                  text={`Vida: ${life}%`}
                  position={[70, 20, -20]}
                  size={1.5}
                  color="green"
                />
              </>
            )}

            {gameOver && (
              <TitleWaterScarcity3D
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

            {gameStarted && (
              <>
                <Bottle
                  position={bottlePosition}
                  onCollect={handleCollision}
                  bottleRef={bottleRef}
                  scale={[0.7, 0.7, 0.7]}
                />

                <Bottle2
                  position={bottle2Position}
                  onCollect={handleCollision2}
                  bottleRef={bottleRef2}
                  scale={[4, 4, 4]}
                />
              </>
            )}
            <ModelWithInteraction />
          </Canvas>
        </>
      )}
    </div>
  );
};

export default ModelScarcity;
