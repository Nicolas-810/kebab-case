import { Text3D, Center } from "@react-three/drei";

const TitleWaterScarcity3D = ({ text, position = [0, 0, 0], size = 1, color = "green" }) => {
  return (
    <Center position={position}>
      <Text3D
        font="/fonts/Arial_Regular.json" 
        size={size}
        bevelEnabled
        bevelSize={0.02}
        height={0.5}
        lineHeight={1}
        letterSpacing={0.05}
      >
        {text}
        <meshStandardMaterial color={color} />
      </Text3D>
    </Center>
  );
};

export default TitleWaterScarcity3D;