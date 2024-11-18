import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import groupLogo from "../../assets/Icon.png";
import imagen1 from "../../assets/watercon.webp";
import imagen2 from "../../assets/waterscacez.webp";
import imagen3 from "../../assets/aciocean.webp";
import Links from "../../Components/Links";
import Home3D from "../../Components/logo-3d/ModelHome";
import TitleWater from "../../Components/logo-3d/TitleWaterScarcity";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [introVisible, setIntroVisible] = useState(true);

  // Funciones para navegar a otras páginas
  const goToPage1 = () => {
    navigate("/WaterPollution");
  };

  const goToPage2 = () => {
    navigate("/WaterScarcity");
  };

  const goToPage3 = () => {
    navigate("/OceanAcidification");
  };

  // Función para ocultar la introducción y mostrar la escena 3D
  const handleIntroComplete = () => {
    setIntroVisible(false);
  };

  return (
    <div className="page-container home-page">
      <header className="navbar-container-home">
        <div className="logo-section">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
        </div>
        <div className="links-container">
          <Links />
        </div>
      </header>

      {/* Introducción inicial */}
      {introVisible ? (
        <div className="intro-screen">
          <h1>Bienvenido a HYDRONET</h1>
          <p>Descubre cómo podemos proteger nuestros océanos y la vida marina.</p>
          <button onClick={handleIntroComplete}>Comenzar</button>
        </div>
      ) : (
        <>
          {/* Sección de información sobre el agua */}
          <div className="importance-container">
            <h2 className="importance-title">¿POR QUÉ ES IMPORTANTE CUIDAR EL AGUA?</h2>
            <p className="importance-text">
              El agua es un recurso vital para todos los seres vivos. Es esencial
              para la supervivencia humana, la agricultura, la industria y el
              mantenimiento de los ecosistemas. Sin embargo, la contaminación y el
              uso excesivo están poniendo en peligro nuestras fuentes de agua.
              Cuidar y conservar este recurso es fundamental para garantizar un
              futuro sostenible para las generaciones venideras.
            </p>
          </div>

          {/* Sección de Problemáticas del Agua */}
          <div className="problematicas-container">
            <div className="header-container">
              <h2>Problemáticas del Agua</h2>
            </div>
            <div className="tarjetas-container">
              <div className="tarjeta" onClick={goToPage1}>
                <img src={imagen1} alt="Imagen 1" className="tarjeta-imagen" />
                <h3>Contaminación del Agua</h3>
                <p>
                  La contaminación del agua se refiere a la introducción de
                  sustancias nocivas que afectan la salud humana y los ecosistemas
                  acuáticos, poniendo en peligro la biodiversidad y los recursos
                  hídricos.
                </p>
              </div>

              <div className="tarjeta" onClick={goToPage2}>
                <img src={imagen2} alt="Imagen 2" className="tarjeta-imagen" />
                <h3>Escasez de agua</h3>
                <p>
                  La escasez de agua es un problema global cada vez más grave. Esto
                  significa que hay menos agua disponible de la que necesitamos para
                  satisfacer las demandas de la población y las actividades
                  económicas.
                </p>
              </div>

              <div className="tarjeta" onClick={goToPage3}>
                <img src={imagen3} alt="Imagen 3" className="tarjeta-imagen" />
                <h3>Acidificación de los océanos</h3>
                <p>
                  La acidificación de los océanos es el aumento de la acidez del
                  agua marina por la absorción de dióxido de carbono (CO₂), lo que
                  afecta negativamente a organismos que habitan en los océanos.
                </p>
              </div>

              {/* Canvas 3D */}
              <div className="canvas-sea-container">
                <Canvas camera={{ position: [5, 0, 20], fov: 100 }} shadows>
                  <Sky sunPosition={[10, 10, 10]} />
                  <ambientLight intensity={0.5} />
                  <OrbitControls enablePan={false} autoRotate />
                  <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                  <TitleWater />
                  <Home3D position={[-10, 0, -17]} castShadow receiveShadow />
                </Canvas>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
