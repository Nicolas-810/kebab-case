import React from "react";
import { useLoader } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";

const ScenaShark = () => {
  const [aoMap, colorMap, displacementMap, normalMap, roughnessMap] = useLoader(THREE.TextureLoader, [
    "/materials/Ground0/Ground054_1K-JPG_AmbientOcclusion.jpg",
    "/materials/Ground0/Ground054_1K-JPG_Color.jpg",
    "/materials/Ground0/Ground054_1K-JPG_Displacement.jpg",
    "/materials/Ground0/Ground054_1K-JPG_NormalDX.jpg",
    "/materials/Ground0/Ground054_1K-JPG_Roughness.jpg",
  ]);

  return (
    <RigidBody type="fixed" friction={1} receiveShadow={true}>
    <Plane
      args={[100, 100, 200, 200]} // Tamaño del plano
      rotation={[-Math.PI / 2, 0, 0]} // Horizontal
      position={[0, -1, 0]} // Posición en Y
      receiveShadow
    >
      <meshStandardMaterial
        map={colorMap}
        aoMap={aoMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        displacementScale={0.2}
        roughness={1}
        metalness={0}
      />
    </Plane>
  </RigidBody>
);
};

export default ScenaShark;
