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
        position={[1, 8, -25]}
      >
        <p>TIBURON BALLENA</p>
      </Html>

      {/* <Center top left position={[1, 7, 0]}>
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
      </Center> */}
    </>
  );
};

export default TitleOceanAcidification;
