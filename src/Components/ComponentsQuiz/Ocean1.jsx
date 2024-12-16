import { Plane } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// Shader material para el agua
const Ocean1ShaderMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color("#1ca3ec") }, // Propiedades del shader (color y tiempo)
  `
    uniform float time;
    varying vec2 vUv;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      pos.z += sin(pos.x * 5.0 + time) * 0.5;  // Olas rápidas
      pos.z += sin(pos.y * 3.0 + time * 0.5) * 0.2; // Olas lentas
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  `
    uniform vec3 color;
    varying vec2 vUv;

    void main() {
      // Gradiente de color basado en la altura (profundidad del agua)
      vec3 finalColor = mix(vec3(0.0, 0.2, 0.5), color, vUv.y);
      gl_FragColor = vec4(finalColor, 0.8);  // Usamos un color semitransparente
    }
  `
);

extend({ Ocean1ShaderMaterial }); // Extendemos para que React Three Fiber pueda usarlo como material

// Componente Ocean1 que contiene el plano con olas
export const Ocean1 = (props) => {
  const oceanRef = useRef();

  // Animamos el tiempo para que las olas se muevan
  useFrame(({ clock }) => {
    if (oceanRef.current) {
      oceanRef.current.material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <Plane
      ref={oceanRef}
      args={[300, 300]}  // Tamaño del plano
      rotation={[-Math.PI / 2, 0, 0]}  // Rotación del plano para que esté horizontal
      position={[0, 0, 0]}  // Posición en el espacio
      {...props}  // Propiedades adicionales
    >
      <ocean1ShaderMaterial attach="material" transparent opacity={0.7} />
    </Plane>
  );
};

export default Ocean1;