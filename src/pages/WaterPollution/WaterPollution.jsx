import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import "./waterPollution.css"

const WaterPollution = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/home");
  };

  const goNext = () => {
    navigate("/WaterScarcity");
  };

  return (
    <div className="page-container">
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
    </div>
  );
};

export default WaterPollution;