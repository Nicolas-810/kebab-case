import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Bottle2 = ({ position, onCollect, scale = [1, 1, 1] }) => {
  const bottleRef2 = useRef();
  const { nodes, materials } = useGLTF("../models-3D/bottle2.glb"); 

  useEffect(() => {
    if (bottleRef2.current) {
      bottleRef2.current.position.set(...position);  
    }
  }, [position]);

  return (
    <group
      ref={bottleRef2}
      position={position}  
      scale={scale}  
      dispose={null}
      onClick={onCollect} 
    >
      <mesh
        castShadow
        geometry={nodes.Cylinder?.geometry} 
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        geometry={nodes.Cylinder001?.geometry} 
        material={materials["Material.002"]} 
      />
    </group>
  );
};

export default Bottle2;
