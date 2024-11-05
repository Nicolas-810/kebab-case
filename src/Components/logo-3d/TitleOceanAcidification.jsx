import {Text3D, Center } from "@react-three/drei";

const TitleOceanAcidification = () => {
  return <>
    <Center top left position={[1,7,0]}>
        <Text3D
          position={[1, 7, 0]}
          font="/fonts/Arial_Regular.json"
          bevelEnabled
          bevelSize={0.02}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          {`ACIDIFICACIÓN DE LOS OCEANOS`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
  </>;
};

export default TitleOceanAcidification;