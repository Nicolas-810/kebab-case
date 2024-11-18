import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Fish3D = ({ rocks, position, onCollision }) => {
  const { nodes, materials } = useGLTF("../models-3D/neon.glb");
  const fishRef = useRef();
  const speed = 0.5;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (fishRef.current) {
        switch (event.key) {
          case "ArrowUp":
          case "w":
            fishRef.current.position.z -= speed;
            break;
          case "ArrowDown":
          case "s":
            fishRef.current.position.z += speed;
            break;
          case "ArrowLeft":
          case "a":
            fishRef.current.position.x -= speed;
            break;
          case "ArrowRight":
          case "d":
            fishRef.current.position.x += speed;
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useFrame(() => {
    if (fishRef.current) {
      rocks.forEach((rockRef) => {
        if (rockRef.current) {
          const fishPosition = new Vector3();
          fishRef.current.getWorldPosition(fishPosition);  
          const rockPosition = new Vector3();
          rockRef.current.getWorldPosition(rockPosition); 

          if (fishPosition.distanceTo(rockPosition) < 3) {
            console.log("¡Colisión detectada!");
            if (onCollision) {
              onCollision(); 
            }
          }
        }
      });
    }
  });

  return (
    <group ref={fishRef} position={position} dispose={null}>
      <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.003']} />
    </group>
  );
};

export default Fish3D;