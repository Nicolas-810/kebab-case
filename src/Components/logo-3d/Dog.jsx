import { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Dog = (props) => {
  const dogRef = useRef();
  const { nodes, materials, animations } = useGLTF("../models-3D/dog.glb");
  const { actions } = useAnimations(animations, dogRef);

  
  
  useEffect(() => {
    actions["Pleased"].play();
    return () => actions["Pleased"].stop();
  }, [actions]);
 


  return (
    <RigidBody type="fixed">
      <group ref={dogRef} {...props} dispose={null}>
        <group name="Scene" scale={5}>
          <group name="Dog">
            <skinnedMesh
              name="Body"
              geometry={nodes.Body.geometry}
              material={materials.DogMaterial}
              skeleton={nodes.Body.skeleton}
              castShadow
            />
            <primitive object={nodes.Root} />
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Dog;

useGLTF.preload("../models-3D/dog.glb");