import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import groupLogo from "../assets/LogoS.png";
import Logo3D from "../Logo3D/Logo3D";
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
            position: [0, 0, 30],
            fov: 90,
          }}
          style={{ width: "100vw", height: "100vh", position: "absolute" }}
        >
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={10}
          />
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, 10, 10]} />
          <Logo3D />
        </Canvas>

        <div className="controls">
          <Music />
        </div>
      </div>
    </>
  );
};

export default Home;
