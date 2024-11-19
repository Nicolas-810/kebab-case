import { Text3D, Center, Html } from "@react-three/drei";

const TitleOceanAcidification = () => {
  return (
    <>
      <Html
        occlude
        className="Welcome-Text"
        center
        distanceFactor={50}
        trasform
        position={[-5, 8, -25]}
      >
        <p style={{ whiteSpace: "nowrap" }}>TIBURON BALLENA</p>
      </Html>

      {
        <Center top left position={[22, 7, 0]}>
          <Text3D
            position={[1, 7, 0]}
            font="/fonts/Arial_Regular.json"
            bevelEnabled
            bevelSize={0.02}
            height={0.5}
            lineHeight={0.75}
            letterSpacing={0.05}
            size={1.5}
          >
            {`LA ACIDIFICACIÓN DE LOS OCEANOS ES 
          UNA AMENAZA SILENCIOSA `}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      }
    </>
  );
};

export default TitleOceanAcidification;
