import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Links from "../../components/Links";
import Fish3D from "../../components/logo-3d/Fish3D";
import Music from "../../music/Music";
import groupLogo from '../../assets/LogoS.png';
import "./WaterScarcity.css";


const WaterScarcity = () => {
  return (
    <>
      <header className="header-container">
        <img src={groupLogo} alt="Group Logo" className="logoGroup" />
        <Links />
      </header>

      <div id="root">
        <Canvas
          camera={{
            position: [4, 0, 15],
            fov: 90,
            zoom: 28
          }}
          style={{ width: "60vw", height: "60vh", position: "absolute" }}
        >
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <OrbitControls autoRotate={false} enableZoom={false}/>
          <Fish3D />
        </Canvas>

        <div className="controls">
          <Music />
        </div>
      </div>
    </>
  );
};

export default WaterScarcity;