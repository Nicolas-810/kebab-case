import { Plane } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const WaterShaderMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color("#1ca3ec") },
  `
    uniform float time;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      pos.z += sin(pos.x * 5.0 + time) * 0.1;
      pos.z += sin(pos.y * 5.0 + time) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(color, 0.6);
    }
  `
);

extend({ WaterShaderMaterial });

export const Water = (props) => {
  const waterRef = useRef();
  useFrame(({ clock }) => {
    if (waterRef.current) {
      waterRef.current.material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <Plane ref={waterRef} args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <waterShaderMaterial attach="material" transparent opacity={0.6} />
    </Plane>
  );
};


export default WaterShaderMaterial;