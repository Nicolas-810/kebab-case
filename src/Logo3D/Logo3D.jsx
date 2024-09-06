import React, { useRef } from "react";
import { TextureLoader, DoubleSide } from "three";
import { useLoader, useFrame } from "@react-three/fiber";
import Logo from "../assets/Earth.jpg";

const Logo3D = () => {
  const texture = useLoader(TextureLoader, Logo);
  const meshRef = useRef();

  useFrame(() => {
    const time = Date.now() / 1000; // Tiempo en segundos para suavidad
    const amplitudeY = 13; // Amplitud del movimiento en el eje Y
    const frequencyY = 2; // Frecuencia del movimiento en el eje Y

    const amplitudeX = 10; // Amplitud del movimiento en el eje X
    const frequencyX = 0.01; // Frecuencia del movimiento en el eje X (ajustar para velocidad)

    // Movimiento ondulatorio en el eje Y
    const newYPosition = amplitudeY * Math.cos(frequencyY * time); // Movimiento en Y basado en coseno

    // Movimiento a lo largo del eje X
    const newXPosition = amplitudeX * Math.sin(frequencyX * time); // Movimiento en X basado en seno

    // Actualiza la posición en los ejes X e Y
    meshRef.current.position.x = newXPosition;
    meshRef.current.position.y = newYPosition;

    // Mantener la posición Z constante
    meshRef.current.position.z = 0; // Asegúrate de que Z sea siempre 0

    // Ajustar la escala en función de la relación de aspecto
    const aspectRatio = window.innerWidth / window.innerHeight;
    const scale = Math.min(aspectRatio, 1);
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 15, 0]}> {/* Mantener la posición Z fija */}
      <sphereGeometry args={[10, 64]} /> {/* Ajusta el tamaño según sea necesario */}
      <meshBasicMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
};

export default Logo3D;
