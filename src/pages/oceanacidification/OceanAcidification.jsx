import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import { Canvas } from "@react-three/fiber";
import {
  BakeShadows,
  OrbitControls,
  PositionalAudio,
  Sky,
} from "@react-three/drei";
import "./OceanAcidification.css";
import TitleOceanAcidification from "../../Components/logo-3d/TitleOceanAcidification";
import Shark3DMov from "../../Components/logo-3d/Shark3dMov";
import Shark3D from "../../Components/logo-3d/Shark3D";
import { Physics } from "@react-three/rapier";
import PostProcessingOceanAcidification from "../../Components/logo-3d/PostProcessingOceanAcidification";
import ScenaShark from "../../Components/logo-3d/ScenaShark";
import { useCallback, useRef } from "react";
import Shark from "../../Components/logo-3d/Shark";

const oceanAcidification = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };

  const goToWaterPollution = () => {
    navigate("/WaterPollution");
  };

  const goToOceanAcidification = () => {
    navigate("/OceanAcidification");
  };

  const goToWaterscarcity = () => {
    navigate("/WaterScarcity");
  };

  const goToQuiz = () => {
    navigate("/quiz");
  };

  const audioRef = useRef(null);

  const handleAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          audioRef.current.setVolume(2);
        })
        .catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
    }
  }, []);

  return (
    <div className="home-page-ocean">
      <div className="page-container-ocean">
        <header className="ocean-navbar-container">
          <div className="logo-section" onClick={goToHomePage}>
            <img src={groupLogo} alt="Logo del proyecto" className="logo" />
            <h3 className="project-title">HYDRONET</h3>
          </div>
          <div className="button-section">
            <button onClick={goToWaterPollution}>Contaminación del Agua</button>
            <button onClick={goToWaterscarcity}>Escasez de agua</button>
            <button onClick={goToOceanAcidification}>
              Acidificación de los océanos
            </button>
            <button onClick={goToQuiz}>Quiz</button>
          </div>
        </header>

        <div className="introduction-container-ocean">
          <h2 className="introduction-title">
            ¿SABÍAS LA GRAVEDAD DE LA ACIDIFICACIÓN DE LOS OCÉANOS?
          </h2>
          <p className="introduction-text">
            La acidificación de los océanos, causada por el aumento de dióxido
            de carbono, reduce su pH y amenaza la vida marina y los ecosistemas
            costeros. Esto afecta la biodiversidad y la cadena alimentaria
            global, poniendo en riesgo a millones de personas. Es crucial actuar
            para proteger nuestros océanos.
          </p>
        </div>

        <div className="Shark3d-container">
          <Canvas camera={{ position: [0, 5, 25], fov: 65 }} shadows>
            <Sky azimuth={0.1} altitude={0.2} turbidity={10} rayleigh={0.5} />
            <TitleOceanAcidification position={[20, -25, 30]} />
            <ambientLight intensity={1.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <Physics>
              <Shark position={[0, 2, -7]} scale={[5, 5, 5]} castShadow />
              <Shark3DMov position={[35, 2, 3]} scale={[1, 1, 1]} castShadow />
              <Shark3D
                position={[-25, 2, 6]}
                onClick={handleAudio}
                castShadow
              />
              <ScenaShark position={[0, -25, 0]} receiveShadow />
            </Physics>
            <OrbitControls enablePan={false} />
            <PostProcessingOceanAcidification />
            <PositionalAudio
              ref={audioRef}
              loop
              url="/Sounds/ocean-waves.mp3"
              distance={10}
            />
          </Canvas>
        </div>
      </div>

      <div className="text-container-ocean">
        <div className="text-box-ocean left-box-ocean-ocean">
          <h2 className="text-title">
            ¿QUE ES LA ACIDIFICACIÓN DE LOS OCEANOS?
          </h2>
          <p>
            La acidificación de los océanos ocurre cuando el CO₂ se disuelve en
            el mar, formando ácido carbónico y reduciendo el pH. Esto afecta a
            especies marinas, especialmente a aquellas con caparazones o
            esqueletos de carbonato de calcio, como corales, moluscos y
            fitoplancton.
          </p>
        </div>

        <div className="text-box-ocean right-box-ocean">
          <h2 className="text-title">¿POR QUÉ ES UN PROBLEMA?</h2>
          <p>
            La pérdida de especies marinas afecta la cadena alimentaria, reduce
            la biodiversidad y pone en riesgo a las comunidades pesqueras.
            Además, los arrecifes de coral, que protegen las costas, se
            deterioran rápidamente, afectando la estabilidad económica de las
            comunidades costeras.
          </p>
        </div>

        <div className="text-box-ocean left-box-ocean">
          <h2 className="text-title">IMPACTO EN LOS ECOSISTEMAS</h2>
          <h3 className="text-subtitle">
            Degradación de los arrecifes de coral
          </h3>
          <p>
            La acidificación debilita los corales, reduciendo su capacidad para
            sostener la biodiversidad y disminuir la protección de las costas
            contra tormentas y erosión.
          </p>
          <h3 className="text-subtitle">
            Reducción en la biodiversidad marina
          </h3>
          <p>
            La acidificación reduce la diversidad biológica, afectando
            especialmente a las especies que dependen de minerales para sus
            estructuras, lo que hace al ecosistema más vulnerable y menos
            resiliente.
          </p>
          <h3 className="text-subtitle">Amenaza para el ciclo del carbono</h3>
          <p>
            La acidificación de los océanos reduce su capacidad para almacenar
            carbono, alterando el ciclo global del carbono y contribuyendo al
            cambio climático.
          </p>
          <h3 className="text-subtitle">Impacto en las comunidades humanas</h3>
          <p>
            Los cambios en los ecosistemas marinos amenazan la economía y la
            seguridad alimentaria de las comunidades costeras, al afectar la
            pesca, el turismo, y la biodiversidad.
          </p>
        </div>

        <div className="text-box-ocean right-box-ocean">
          <h2 className="text-title">¿QUÉ PODEMOS HACER?</h2>
          <h3 className="text-subtitle">Reducir las emisiones de CO₂</h3>
          <p>
            La principal causa de la acidificación es el aumento de CO₂ en la
            atmósfera. Adoptar energías renovables, reducir el uso de
            combustibles fósiles y mejorar la eficiencia energética son pasos
            clave para reducir nuestra huella de carbono.
          </p>
          <h3 className="text-subtitle">Proteger los ecosistemas marinos</h3>
          <p>
            Apoyar la creación de áreas marinas protegidas ayuda a preservar la
            biodiversidad y mejora la resistencia de los ecosistemas marinos
            frente a la acidificación.
          </p>
          <h3 className="text-subtitle">
            Promover prácticas de pesca sostenible
          </h3>
          <p>
            La pesca responsable ayuda a mantener el equilibrio en los
            ecosistemas marinos, lo que hace que los océanos sean más
            resilientes ante cambios ambientales, incluida la acidificación.
          </p>
          <h3 className="text-subtitle">Educación y concienciación</h3>
          <p>
            Informarse y educar a otros sobre los efectos de la acidificación
            ayuda a crear una sociedad más consciente y proactiva en la
            preservación de los océanos.
          </p>
          <h3 className="text-subtitle">Apoyar la investigación científica</h3>
          <p>
            La investigación es esencial para entender y enfrentar la
            acidificación. Apoyar iniciativas científicas permite desarrollar
            nuevas soluciones y estrategias de adaptación para los ecosistemas
            marinos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default oceanAcidification;
