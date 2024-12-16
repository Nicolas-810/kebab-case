import React, { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";

const Pelota3D = (props) => {
  const pelotaRef = useRef(null);
  const { nodes } = useGLTF("../models-3D/pelota.glb");

  const handleBall = useCallback(() => {
    pelotaRef.current.applyTorqueImpulse({ x: 0, y: 20, z: -5 }, true);
  }, []);

  return (
    <RigidBody ref={pelotaRef} colliders={false} friction={2}>
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
      <BallCollider args={[1]} position={props.position} />
    </RigidBody>
  );
};

useGLTF.preload("../models-3D/pelota.glb");

export default Pelota3D;
