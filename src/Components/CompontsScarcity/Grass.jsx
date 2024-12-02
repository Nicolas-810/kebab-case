import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { RigidBody } from "@react-three/rapier";

const Grass = (props) => {
  const { nodes, materials } = useGLTF("../models-3D/grass.glb");
  const GrassRef = useRef();
  return (
    <group {...props} dispose={null}>
      <RigidBody ref={GrassRef} >
      <group
        position={[0.655, -1.166, 0.159]}
        rotation={[1.397, -1.568, -Math.PI]}
        scale={2}
      >
        <group position={[-1.15, -7.647, -1.218]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.raw2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.raw2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.raw2}
          />
        </group>
      </group>
      </RigidBody>;
    </group>
  );
};

useGLTF.preload("../models-3D/grass.glb");

export default Grass;

