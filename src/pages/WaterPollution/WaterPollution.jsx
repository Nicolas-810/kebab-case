import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Cloud, OrbitControls, Sky, Sparkles, Stars } from "@react-three/drei";
import groupLogo from "../../assets/Icon.png";
import "./waterPollution.css";
import House3D from "../../Components/logo-3d/LightHouse";
import Html3DWaterPollution from "../../Components/Html3DWaterPollution";

const WaterPollution = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  const goNext = () => {
    navigate("/WaterScarcity");
  };

  return (
    <div className="home-page-pullution">
      <div className="page-container-pollution">
        <header className="waterP-navbar-container">
          <div className="logo-section">
            <img src={groupLogo} alt="Logo del proyecto" className="logo" />
            <h3 className="project-title">HYDRONET</h3>
          </div>
          <div className="button-section">
            <button onClick={goBack}>Volver</button>
            <button onClick={goNext}>Siguiente</button>
          </div>
        </header>

        <div className="text-container">
          <div className="text-box">
            <h2 className="text-title">
              ¿Sabías que la contaminación del agua es una de las principales
              amenazas para el planeta?
            </h2>
            <p>
              La contaminación del agua ocurre cuando sustancias dañinas como
              químicos, residuos industriales y microorganismos ingresan en
              cuerpos de agua como ríos, lagos y océanos, volviéndolos
              peligrosos para los humanos, la vida silvestre y el medio ambiente
              en general.
            </p>
          </div>
          <div className="text-box">
            <h2 className="text-title">
              Principales Causas de la Contaminación del Agua
            </h2>
            <p>
              <ul>
                <li>
                  Desechos Industriales: Muchas industrias vierten productos
                  químicos y tóxicos directamente en ríos y mares sin tratarlos
                  adecuadamente. Esto incluye metales pesados, plásticos y
                  residuos químicos.
                </li>

                <li>
                  Agricultura: El uso de fertilizantes y pesticidas en la
                  agricultura contamina el agua al filtrarse en el suelo y
                  llegar a los cuerpos de agua cercanos. El nitrato en los
                  fertilizantes, por ejemplo, contribuye al crecimiento de algas
                  que consume el oxígeno del agua.
                </li>

                <li>
                  Desechos Domésticos: Las aguas residuales de los hogares
                  (incluyendo detergentes, jabones y residuos orgánicos) pueden
                  contaminar las fuentes de agua si no son tratadas
                  correctamente.
                </li>

                <li>
                  Derrames de Petróleo: Los derrames de petróleo en el océano
                  afectan a millones de especies acuáticas y pueden tardar
                  décadas en limpiarse completamente.
                </li>

                <li>
                  Basura Plástica: El plástico es un contaminante persistente
                  que afecta la vida marina y puede ser ingerido por animales
                  acuáticos, entrando en la cadena alimenticia.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-box">
            <h2 className="text-title">
              Solución al problema de la contaminación del Agua
            </h2>
            <p>
              <ul>
                <li>
                  Actualizar plantas de tratamiento: Mejorar las instalaciones
                  para el tratamiento de aguas residuales ayuda a remover
                  contaminantes industriales, agrícolas y domésticos antes de
                  que lleguen a ríos y mares.
                </li>

                <li>
                  Instalación de sistemas de filtración avanzados: Las
                  tecnologías avanzadas, como los sistemas de filtración por
                  membrana, pueden ser más efectivas en la eliminación de
                  toxinas y bacterias.
                </li>

                <li>
                  Agricultura sostenible: Promover técnicas de agricultura
                  sostenible, como el uso de fertilizantes orgánicos y
                  pesticidas naturales, reduce la contaminación que llega a
                  cuerpos de agua.
                </li>

                <li>
                  Crear barreras vegetales: Los árboles y plantas cerca de
                  campos agrícolas pueden absorber el exceso de nutrientes y
                  contaminantes antes de que lleguen a los ríos.
                </li>

                <li>
                  Los humedales y manglares actúan como filtros naturales al
                  absorber y filtrar contaminantes. Proteger estos ecosistemas
                  es crucial para la purificación del agua.
                </li>
                <br />
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="house3D-container">

        <Canvas shadows camera={{ position: [2, 2, 15], fov: 80 }}>
          <Html3DWaterPollution />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <Sparkles
            count={300}
            color="yellow"
            size={15}
            speed={0.5}
            scale={12}
            position={[-9, -5, -15]} // Posición de Sparkles (x, y, z)
          />
          <Cloud
            seed={1}
            scale={1}
            volume={3}
            color="white"
            fade={100}
            segments={40}
            bounds={[-10, 2, 2]}
            position={[0, 7, -10]}
            growth={5}
            speed={1}
            concentrate={"inside"}
          />
          <Sky
            sunPosition={[0, 0, -1]}
            inclination={0.2}
            azimuth={180}
            mieCoefficient={0.005}
            elevation={5}
            mieDirectionalG={0.07}
            rayleigh={3}
            turbidity={10}
            exposure={0.5}
          />
          <Stars
            radius={100}
            depth={50}
            count={1000}
            factor={4}
            saturation={0}
            speed={1}
          />

          <House3D position={[-10, -10, -17]} />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default WaterPollution;
