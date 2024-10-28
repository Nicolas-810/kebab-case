import { useNavigate } from "react-router-dom";
import './page404.css';
import groupLogo from '../../assets/Icon.png'; // Asegúrate de importar el logo
import centerImage from '../../assets/Error404.png'; // Asegúrate de tener esta imagen

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  };

  return (
    <div className="container-404">
      <header className="navbar-container">
        <div className="logo-section">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
        </div>
        <button className="home-button" onClick={handleGoHome}>
          Volver a página inicio
        </button>
      </header>
      
      <div className="content">
        <img src={centerImage} alt="Imagen de error 404" className="center-image" />
      </div>
    </div>
  );
};

export default Page404;