import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Fish3D = (props) => {
  const { nodes, materials } = useGLTF("../models-3D/PlasticBottles.glb");
  const fishRef = useRef();
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // useFrame(() => {
  //   if (startTime && fishRef.current) {
  //     const elapsedTime = (Date.now() - startTime) / 1000;

  //     // Movimiento de nado (oscilación hacia arriba y abajo en el eje Y)
  //     const swimAmplitude = 0.1;
  //     const swimFrequency = 1.5;
  //     fishRef.current.position.y =
  //       swimAmplitude * Math.sin(swimFrequency * elapsedTime);

  //     // Oscilación suave en el eje Z (avance y retroceso)
  //     const forwardBackwardAmplitude = 10;
  //     fishRef.current.position.z =
  //       forwardBackwardAmplitude * Math.sin(elapsedTime * 0.2);

  //     // Rotación suave para simular balanceo
  //     fishRef.current.rotation.z = 0.05 * Math.sin(elapsedTime * 2);
  //   }
  // });

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Plastic_Bottle_03_GEO"
          geometry={nodes.Plastic_Bottle_03_GEO.geometry}
          material={materials.Plastic_Bottles}
          position={[0.59, 0, 0]}
        />
        <mesh
          name="Plastic_Bottle_02_GEO"
          geometry={nodes.Plastic_Bottle_02_GEO.geometry}
          material={materials.Plastic_Bottles}
        />
        <mesh
          name="Plastic_Bottle_01_GEO"
          geometry={nodes.Plastic_Bottle_01_GEO.geometry}
          material={materials.Plastic_Bottles}
          position={[-0.37, 0, 0]}
        />
      </group>
    </group>
  )
};

useGLTF.preload("../models-3D/PlasticBottles.glb");

export default Fish3D;
