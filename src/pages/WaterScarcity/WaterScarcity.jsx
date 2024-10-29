import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import "./WaterScarcity.css";

const WaterScarcity = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  const goNext = () => {
    navigate("/OceanAcidification");
  };

  return (
    <div className="page-container">
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

      <div className="text-container">
        <div className="text-box left-box">
          <h2 className="text-title">Escasez de Agua</h2>
          <p>
            La escasez de agua es un problema creciente que afecta a comunidades y ecosistemas en todo el mundo. Es crucial tomar medidas para conservar este recurso vital.
          </p>
        </div>
        <div className="text-box right-box">
          <h2 className="text-title">Impacto Global</h2>
          <p>
            La falta de agua limpia impacta directamente la salud, la producción de alimentos y la estabilidad de las economías. Proteger el agua es esencial para nuestro futuro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaterScarcity;