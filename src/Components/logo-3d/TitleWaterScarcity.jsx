import { Html } from "@react-three/drei";
import "../../pages/WaterScarcity/WaterScarcity.css";

const TitleWaterScarcity = ({ text, position, size = 1, color = "black" }) => {
  return (
    <>
      <Html
        occlude
        className="Welcome-Text"
        center
        distanceFactor={100 / size}
        position={position}
      >
        <h4
          style={{
            whiteSpace: "nowrap",
            fontSize: `${size}em`,
            textAlign: "center",
            color: color,
          }}
        >
          {text}
        </h4>
      </Html>
    </>
  );
};

export default TitleWaterScarcity;