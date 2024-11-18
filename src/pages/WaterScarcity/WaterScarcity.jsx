import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import Antes1 from "../../assets/antesEs.jpeg";
import Despues1 from "../../assets/despuesEs.jpeg";
import Antes2 from "../../assets/AntesGlo.jpg";
import Despues2 from "../../assets/DespuesGlo.jpg";
import imagen1 from "../../assets/modeloscar.png";
import "./WaterScarcity.css";
import "../home/Home.css";

const WaterScarcity = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  const goNext = () => {
    navigate("/OceanAcidification");
  };

  const goToModelPage = () => {
    navigate("/modelScarcity");
  };

  return (
    <div className="home-page-scarcity">
      <div className="page-container-scarcity">
        <header className="waterS-navbar-container">
          <div className="logo-section">
            <img src={groupLogo} alt="Logo del proyecto" className="logo" />
            <h3 className="project-title">HYDRONET</h3>
          </div>
          <div className="button-section">
            <button onClick={goBack}>Volver</button>
            <button onClick={goNext}>Siguiente</button>
          </div>
        </header>

        <div className="introduction-container">
          <h2 className="introduction-title">
          ¿SABES QUE TAN GRAVE ES EL PROBLEMA DE LA ESCASEZ DEL AGUA?
          </h2>
          <p className="introduction-text">
            La escasez de agua es uno de los desafíos más críticos de nuestro
            tiempo. Con cada día que pasa, el agua limpia se vuelve un recurso
            más escaso. Este problema afecta la vida de millones de personas y
            amenaza la biodiversidad de nuestro planeta. A medida que exploramos
            el impacto global de la escasez de agua, es importante entender que
            cada acción cuenta en la preservación de este recurso vital.
          </p>
        </div>

        <div className="content-container">
          <div className="text-box context-box">
            <h2 className="text-title">Escasez de Agua</h2>
            <p>
              La escasez de agua es un problema creciente que afecta a
              comunidades y ecosistemas en todo el mundo. Es crucial tomar
              medidas para conservar este recurso vital.
            </p>
          </div>

          <div className="image-container">
            <div className="image-box">
              <h3 className="before-after">Antes</h3>
              <img src={Antes1} alt="Escasez de Agua antes" />
            </div>
            <div className="image-box">
              <h3 className="before-after">Después</h3>
              <img src={Despues1} alt="Escasez de Agua después" />
            </div>
          </div>

          <div className="text-box context-box">
            <h2 className="text-title">Impacto Global</h2>
            <p>
              La falta de acceso a agua limpia afecta no solo la salud de las
              personas, sino también la producción de alimentos y la estabilidad
              económica. La escasez de agua puede llevar a crisis humanitarias,
              incrementar la pobreza y desencadenar conflictos por recursos
              limitados. Proteger el agua es esencial para el bienestar de
              generaciones futuras y para mantener el equilibrio de los ecosistemas.
            </p>
          </div>
        </div>

        <div className="image-container">
          <div className="image-box">
            <img src={Antes2} alt="Impacto Global antes" />
          </div>
          <div className="image-box">
            <img src={Despues2} alt="Impacto Global después" />
          </div>
        </div>

        <div className="content-container">
          <div className="text-box context-box">
            <h2 className="text-title">Soluciones para la Escasez de Agua</h2>
            <p>
              Afortunadamente, existen soluciones para enfrentar la escasez de
              agua. Algunas de las estrategias clave incluyen:
            </p>
            <ul>
              <li><strong>Conservación y uso eficiente:</strong> Reducir el desperdicio de agua mediante tecnologías de ahorro y hábitos responsables.</li>
              <li><strong>Reutilización de aguas residuales:</strong> Implementar sistemas de tratamiento y reutilización de aguas residuales para diversos fines, como riego o procesos industriales.</li>
              <li><strong>Desalinización:</strong> Convertir el agua salada en agua potable mediante tecnología de desalinización, una solución útil para zonas costeras.</li>
              <li><strong>Protección de fuentes de agua:</strong> Preservar y restaurar fuentes naturales de agua, como ríos, lagos y acuíferos, para asegurar su disponibilidad a largo plazo.</li>
              <li><strong>Educación y conciencia:</strong> Promover la educación sobre el manejo sostenible del agua y sensibilizar a la población sobre la importancia de este recurso.</li>
            </ul>
            <p>
              La implementación de estas soluciones es esencial para garantizar el
              acceso al agua limpia y segura para todos.
            </p>
          </div>
        </div>

        <div className="tarjetas-container">
          <div className="tarjeta" onClick={goToModelPage}>
            <img src={imagen1} alt="Imagen 1" className="tarjeta-imagen" />
            <h3>JUEGO</h3>
            <p>Tu objetivo es esquivar las rocas que caen.</p>
            <p>
              Usa las flechas laterales para mover el pez de lado a lado y
              esquivar las rocas.
            </p>
            <p>¡Diviértete y ten cuidado con las rocas!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterScarcity;