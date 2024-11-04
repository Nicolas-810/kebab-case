import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Fish3D from "../../Components/logo-3d/Fish3D";
import "./OceanAcidification.css";

const oceanAcidification = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  const goNext = () => {
    navigate("quiz");
  };

  return (
    <div className="home-page-ocean">
    <div className="page-container-ocean">
      <header className="ocean-navbar-container">
        <div className="logo-section">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
        </div>
        <div className="button-section">
          <button onClick={goBack}>Volver</button>
          <button onClick={goNext}>Siguiente</button>
        </div>
      </header>

      <div className="fish3d-container">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Fish3D position={[-10, 0, -17]} />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
    </div>
    </div>
  );
};

export default oceanAcidification;