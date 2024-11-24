import React, { useCallback, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Pelota3D = (props) => {
  const pelotaRef = useRef();
  const { nodes, materials, animations } = useGLTF("../models-3D/pelota.glb");

  const handleBall = useCallback(() => {
    pelotaRef.current.applyImpulse({ x: 0, y: 20, z: -5 }, true);
  }, []);

  return (
    <RigidBody ref={pelotaRef} colliders="ball" friction={2}>
      <mesh {...props} onClick={handleBall}>
        <group>
          <group>
            <group name="RootNode0" scale={0.55}>
              <group name="geo1">
                <skinnedMesh
                  name="soccer_ball2"
                  geometry={nodes.soccer_ball2.geometry}
                  material={nodes.soccer_ball2.material}
                  skeleton={nodes.soccer_ball2.skeleton}
                />
              </group>
              <group name="skeletal3" scale={0.33}>
                <primitive object={nodes.root4} />
              </group>
            </group>
          </group>
        </group>
      </mesh>
    </RigidBody>
  );
};

useGLTF.preload("../models-3D/pelota.glb");

export default Pelota3D;
