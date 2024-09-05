import React, { useRef } from 'react';
import { TextureLoader, DoubleSide } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import Logo from '../assets/Earth.jpg';

const Logo3D = () => {
  const texture = useLoader(TextureLoader, Logo);
  const meshRef = useRef();

  useFrame(() => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const scale = Math.min(aspectRatio, 1); 
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[10, 64, 64]} />
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
}

export default Logo3D;
