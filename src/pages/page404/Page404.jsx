import { useNavigate } from "react-router-dom";
import groupLogo from '../../assets/Icon.png';
import centerImage from '../../assets/Error404.png'; 
import './page404.css';

const Page404 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/Home");
  };

  return (
    <div className="container-404">
      <header className="navbar-container-404">
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