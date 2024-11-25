import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bottle = ({ position, onCollect, bottleRef }) => {
  const { nodes, materials } = useGLTF("../models-3D/bottle.glb");

  useEffect(() => {
    if (bottleRef.current) {
      bottleRef.current.position.set(position[0], position[1], position[2]);
    }
  }, [position, bottleRef]);

  return (
    <group ref={bottleRef} position={position} dispose={null} scale={0.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003_1.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003_2.geometry}
        material={materials["Procedural Water Surface"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003_3.geometry}
        material={materials.Material}
      />
    </group>
  );
};

export default Bottle;