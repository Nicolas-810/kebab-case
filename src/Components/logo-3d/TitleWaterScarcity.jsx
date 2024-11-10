import { Html} from "@react-three/drei";
import "../../pages/waterscarcity/WaterScarcity.css"

const TitleWaterScarcity = () => {
  return (
    <>
      <Html
        occlude
        className="Welcome-Text"
        center
        distanceFactor={100}
        trasform
        position={[1, 8, 0]}
      >
        <h4>Conoce_A_Nuestro_Pez_Camaleon</h4>
      </Html>
    </>
  );
};

export default TitleWaterScarcity;