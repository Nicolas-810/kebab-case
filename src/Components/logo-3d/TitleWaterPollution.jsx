import {Text3D, Center } from "@react-three/drei";

const TitleWaterPollution = () => {
  return <>
    <Center top left position={[1,-3,0]}>
        <Text3D
          position={[1, -10, 0]}
          castShadow
          font="/fonts/Arial_Regular.json"
          bevelEnabled
          bevelSize={0.02}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}

        >
          {`CONTAMINACIÓN DEL AGUA`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
  </>;
};

export default TitleWaterPollution;