import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import {Color, HemisphereLight } from "three";

const Lights = () => {
  const hemisphereLightRef = useRef();

  useHelper(hemisphereLightRef, HemisphereLight);

  return (
    <>
      <hemisphereLight
      ref={hemisphereLightRef}
      castShadow
        position={[0, 10, 0]}
        intensity={2}
        skyColor={new Color("red")}
        groundColor={new Color("black")}
      />
    </>
  );
};

export default Lights;
