import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import groupLogo from "../assets/LogoS.png";
import Fish3D from "../Logo3D/Fish3D";
import Music from "../Music/Music.jsx";
import Links from "../Components/Links";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="header-container">
        <img src={groupLogo} alt="Group Logo" className="logoGroup" />
        <Links />
      </header>

      <div id="root">
        <Canvas
          camera={{
            position: [-15, 1, -10],
            fov: 90,
          }}
          style={{ width: "130vw", height: "100vh", position: "absolute" }}
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

export default Home;
