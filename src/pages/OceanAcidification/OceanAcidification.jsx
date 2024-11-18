import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import "./OceanAcidification.css";
import Shark3D from "../../Components/logo-3d/Shark3D";
import TitleOceanAcidification from "../../Components/logo-3d/TitleOceanAcidification";

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

        <div className="introduction-container-ocean">
          <h2 className="introduction-title">
            ¿SABÍAS LA GRAVEDAD DE LA ACIDIFICACIÓN DE LOS OCÉANOS?
          </h2>
          <p className="introduction-text">
            La acidificación de los océanos es uno de los problemas ambientales
            más críticos de nuestro tiempo. A medida que los océanos absorben
            más dióxido de carbono, su pH disminuye, amenazando la vida marina y
            los ecosistemas costeros. Este fenómeno afecta la biodiversidad y la
            cadena alimentaria global, impactando la vida de millones que
            dependen del mar. Es esencial que tomemos conciencia de este desafío
            y actuemos para proteger nuestros océanos antes de que sea demasiado
            tarde.
          </p>
        </div>

        <div className="Shark3d-container">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Sky azimuth={0.1} altitude={0.2} turbidity={10} rayleigh={0.5} />
            <TitleOceanAcidification />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Shark3D position={[0, 0, -5]} />
            <OrbitControls enablePan={false} />
          </Canvas>
        </div>
      </div>

      <div className="text-container-ocean">
        <div className="text-box-ocean left-box-ocean-ocean">
          <h2 className="text-title">
            ¿QUE ES LA ACIDIFICACIÓN DE LOS OCEANOS?
          </h2>
          <p>
            La acidificación de los océanos es un proceso químico que ocurre
            cuando el dióxido de carbono (CO₂) de la atmósfera se disuelve en el
            mar, creando ácido carbónico y disminuyendo el PH de los océanos,
            Este fenómeno hace que el agua se vuelva mas acida, lo que afecta
            negativamente a muchas especies marinas especialmente aquellas de
            caparazones o esqueletos de carbonato de calcio, como los corales,
            los moluscos y ciertos tipos de fitoplancton.
          </p>
        </div>

        <div className="text-box-ocean right-box-ocean">
          <h2 className="text-title">¿POR QUÉ ES UN PROBLEMA?</h2>
          <p>
            La acidificación de los océanos representa una amenaza silencionsa
            para los ecosistemas marinos.Esta alteración en la química oceánica
            significa que los organismos marinos tienen mayores dificultades
            para formar sus estructuras, afectando no solo a ellos, sino también
            a todas las especies que dependen de ellos para alimentarse.
            <br />
            La pérdida de estas especies impacta directamente en la cadena
            alimentaria, reduciendo la diversidad de la vida marina y poniendo
            en riesgo a comunidades humanas que dependen de la pesca. demás, los
            arrecifes de coral, que protegen las costas de tormentas y la
            erosión, se deterioran más rápidamente. La acidificación no solo
            afecta la biodiversidad, sino que también pone en riesgo la
            estabilidad económica de muchas comunidades costeras.
          </p>
        </div>

        <div className="text-box-ocean left-box-ocean">
          <h2 className="text-title">EFECTOS DE LA VIDA MARINA</h2>
          <h3 className="text-subtitle">
            Dificultades para formar estructuras
          </h3>
          <p>
            Organismos como corales, moluscos y algunos crustáceos necesitan
            carbonato de calcio para construir caparazones y esqueletos. La
            acidificación disminuye la disponibilidad de este mineral,
            debilitando estas estructuras y haciendo a los organismos más
            vulnerables.
          </p>
          <h3 className="text-subtitle">Pérdida de biodiversidad</h3>
          <p>
            La acidificación afecta a especies esenciales en la cadena
            alimentaria, como ciertos tipos de fitoplancton. Esto repercute en
            todo el ecosistema, ya que otras especies que dependen de ellos,
            como peces y mariscos, también se ven afectadas.
          </p>
          <h3 className="text-subtitle">Corales en peligro</h3>
          <p>
            Los arrecifes de coral, conocidos como las "selvas del mar", están
            en alto riesgo. La acidificación les impide desarrollarse plenamente
            y los hace más frágiles, afectando a las especies que dependen de
            ellos para refugio y alimento.
          </p>
          <h3 className="text-subtitle">Alteración de los ciclos de vida</h3>
          <p>
            La acidez del agua afecta la reproducción y el desarrollo de muchas
            especies marinas. Por ejemplo, algunas especies de peces
            experimentan problemas en sus sistemas sensoriales y de navegación,
            lo que impacta su capacidad para sobrevivir y reproducirse.
          </p>
          <h3 className="text-subtitle">Amenaza para la pesca y la economía</h3>
          <p>
            La reducción en la población de especies comerciales (como mariscos)
            amenaza a la industria pesquera y a las economías que dependen de la
            pesca, poniendo en riesgo la seguridad alimentaria de muchas
            comunidades.
          </p>
        </div>

        <div className="text-box-ocean right-box-ocean">
          <h2 className="text-title">IMPACTO EN LOS ECOSISTEMAS</h2>
          <h3 className="text-subtitle">
            Desequilibrio en la cadena alimentaria
          </h3>
          <p>
            La acidificación afecta a organismos pequeños, como el fitoplancton
            y algunos crustáceos, que son la base de la cadena alimentaria
            marina. Esto genera un efecto dominó que impacta a especies mayores,
            incluyendo peces y mamíferos marinos, alterando la estabilidad de
            todo el ecosistema.
          </p>
          <h3 className="text-subtitle">
            Degradación de los arrecifes de coral
          </h3>
          <p>
            Los corales son hábitats esenciales para muchas especies marinas. La
            acidificación debilita sus estructuras, reduciendo la capacidad de
            los arrecifes para sostener a la biodiversidad. Esto no solo impacta
            a las especies que viven en los arrecifes, sino que también
            disminuye la protección que estos brindan a las costas contra
            tormentas y erosión.
          </p>
          <h3 className="text-subtitle">
            Reducción en la biodiversidad marina
          </h3>
          <p>
            La acidificación afecta de manera desproporcionada a ciertas
            especies, llevando a una pérdida de diversidad biológica. Las
            especies que dependen de minerales para construir sus estructuras se
            ven especialmente afectadas, lo que puede llevar a un ecosistema
            menos resiliente y más vulnerable a otros cambios ambientales.
          </p>
          <h3 className="text-subtitle">Amenaza para el ciclo del carbono</h3>
          <p>
            • Los océanos juegan un papel clave en el ciclo global del carbono,
            absorbiendo CO₂ de la atmósfera. La acidificación altera este
            proceso, reduciendo la capacidad de los océanos para almacenar
            carbono y contribuyendo al cambio climático a largo plazo.
          </p>
          <h3 className="text-subtitle">Impacto en las comunidades humanas</h3>
          <p>
            Los cambios en los ecosistemas marinos afectan directamente a las
            comunidades costeras que dependen de la pesca y del turismo. La
            pérdida de biodiversidad y la degradación de los arrecifes ponen en
            riesgo tanto la economía como la seguridad alimentaria de estas
            comunidades.
          </p>
        </div>

        <div className="text-box-ocean left-box-ocean">
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
