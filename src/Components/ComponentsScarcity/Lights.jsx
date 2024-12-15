import { useRef } from "react";

const Lights = () => {
  const directionalLightRef = useRef();
  
  return (
    <>
      <ambientLight color="#ffffff" intensity={1} /> 
      <directionalLight
        ref={directionalLightRef}
        color="#ffffff"
        position={[0, 10, 50]}
        intensity={5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1} 
        shadow-camera-far={100} 
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
        castShadow={true}
      />
    </>
  );
};

export default Lights;