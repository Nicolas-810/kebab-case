import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Fish3D = (props) => {
  const { nodes, materials } = useGLTF("../models-3D/turtle.glb");
  const fishRef = useRef();
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useFrame(() => {
    if (startTime && fishRef.current) {
      console.log("Animación ejecutándose");  // Verificación en consola

      const elapsedTime = (Date.now() - startTime) / 100;

      // Movimiento de nado en el eje Y
      const swimAmplitude = 0.1;
      const swimFrequency = 1.2;
      fishRef.current.position.y = swimAmplitude * Math.sin(swimFrequency * elapsedTime);

      // Movimiento en el eje Z
      const forwardBackwardAmplitude = 8;
      fishRef.current.position.z = forwardBackwardAmplitude * Math.sin(elapsedTime * 0.1);

      // Rotación para balanceo
      fishRef.current.rotation.z = 0.05 * Math.sin(elapsedTime * 1);
    }
  });

  return (
      <group {...props} dispose={null}>
        <group>
          <mesh
            name="geometry_0"
            geometry={nodes.geometry_0.geometry}
            material={nodes.geometry_0.material}
          />
        </group>
      </group>
  );
};

useGLTF.preload("../models-3D/turtle.glb");

export default Fish3D;