import "./Quiz.css";
import groupLogo from "../../assets/Icon.png";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Ocean1 from "../../Components/Ocean1";
import Paper from "../../Components/Paper";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Boat from "../../Components/Boat";

const Quiz = () => {
  const navigate = useNavigate();
  const cameraRef = useRef(); 

  const generateRandomPosition = (width, height) => {
    return [
      Math.random() * width - width / 5,  
      0,  
      Math.random() * height - height / 10  
    ];
  };

  const paperPositions = [];
  for (let i = 0; i < 5; i++) {
    paperPositions.push(generateRandomPosition(100, 100));  
  }

  const scale = [10, 10, 10];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <header className="waterQ-navbar-container">
        <img src={groupLogo} alt="Logo del proyecto" className="logo" />
        <h3 className="project-title">HYDRONET</h3>
        <div className="button-section">
          <button className="buttonQ" onClick={goBack}>
            Volver
          </button>
        </div>
      </header>

      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 10, 30], fov: 50 }}
        ref={cameraRef}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />

        {paperPositions.map((position, index) => (
          <Paper key={index} position={position} scale={scale} />
        ))}

        <Boat/>

        <Ocean1 />
      </Canvas>
    </>
  );
};

export default Quiz;