import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import Fish3D from "../../Components/logo-3d/Fish3D";
import Rock from "../../Components/Rock";
import { Water } from "../../Components/Water";
import { useRef, useState, useEffect } from "react";
import groupLogo from "../../assets/Icon.png";
import useSound from "use-sound";
import backgroundMusic from "../../assets/juegoS.mp3";
import collisionSound from "../../assets/collision.mp3";
import "./ModelScarcity.css";

const ModelScarcity = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [play, { stop }] = useSound(backgroundMusic, {
    volume: 0.2,
    loop: true,
  });
  const [playCollision] = useSound(collisionSound, { volume: 1 });

  const [gameStarted, setGameStarted] = useState(false);
  const [fishSpeed, setFishSpeed] = useState(10);

  const rockRefs = Array.from({ length: 10 }, () => useRef());

  const onFishMove = (deltaX) => {
    if (Math.abs(deltaX) > 10) {
      setFishSpeed(100);
    } else {
      setFishSpeed(100);
    }
  };

  const toggleGame = () => {
    if (!gameStarted) {
      play();
      setGameStarted(true);
    } else {
      stop();
      setGameStarted(false);
    }
  };

  const handleCollision = () => {
    console.log("Colisión detectada");
    playCollision();
    stop();
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    play();
  };

  useEffect(() => {
    if (gameStarted) {
      play();
    } else {
      stop();
    }
  }, [gameStarted, play, stop]);

  return (
    <div className="home-page-modelS">
      <header className="modelS-navbar-container">
        <div className="logo-section">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
        </div>
        <div className="button-section">
          <button onClick={goBack}>Volver</button>
        </div>
      </header>

      <div className="canvas-sea-container">
        <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
          <Sky sunPosition={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Water />

          {gameStarted &&
            rockRefs.map((rockRef, index) => (
              <Rock
                key={index}
                position={[Math.random() * 30 - 15, 1, Math.random() * 30 - 15]}
                speed={0.1}
                rockRef={rockRef}
              />
            ))}

          <Fish3D
            rocks={rockRefs}
            position={[-10, 0, -17]}
            onMove={onFishMove}
            speed={fishSpeed}
            onCollision={handleCollision}
          />
        </Canvas>
      </div>

      <div className="button-container">
        <button className="button-start" onClick={toggleGame}>
          {gameStarted ? "Detener Juego" : "Iniciar Juego"}
        </button>
      </div>
    </div>
  );
};

export default ModelScarcity;