import Links from "../../components/Links";
import "./Problematics.css";
import { useNavigate } from "react-router-dom"; 
import imagen1 from "../../assets/watercon.webp";
import imagen2 from "../../assets/waterscacez.webp";
import imagen3 from "../../assets/aciocean.webp";



const Problematics = () => {
  const navigate = useNavigate();
  

  const goToPage1 = () => navigate("/problematica1");
  const goToPage2 = () => navigate("/problematica2");
  const goToPage3 = () => navigate("/problematica3");

  return (
    <div className="problematicas-container">
      <header className="header-container">
       {/* <img src={groupLogo} alt="Group Logo" className="logoGroup" />*/}
        <Links />
      </header>

      <div className="tarjetas-container">
        <div className="tarjeta" onClick={goToPage1}>
          <img src={imagen1} alt="Imagen 1" className="tarjeta-imagen" />
          <h3>Contaminación del Agua</h3>
          <p>La contaminación del agua se refiere a la introducción de sustancias nocivas que afectan la salud humana y los ecosistemas acuáticos, poniendo en peligro la biodiversidad y los recursos hídricos.</p>
        </div>
        
        <div className="tarjeta" onClick={goToPage2}>
          <img src={imagen2}  alt="Imagen 2" className="tarjeta-imagen" />
          <h3>Escasez de agua</h3>
          <p>La escasez de agua es un problema global cada vez más grave. Esto significa que hay menos agua disponible de la que necesitamos para satisfacer las demandas de la población y las actividades económicas.</p>
        </div>
        
        <div className="tarjeta" onClick={goToPage3}>
          <img src={imagen3}  alt="Imagen 3" className="tarjeta-imagen" />
          <h3>Acidificación de los océanos</h3>
          <p>La acidificación de los océanos es el aumento de la acidez del agua marina por la absorción de dióxido de carbono (CO₂), lo que afecta negativamente a organismos que habitan en los océanos.</p>
        </div>
      </div>
    </div>
  );
};


export default Problematics;
