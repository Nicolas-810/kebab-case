import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from 'three';

const Boat = ({ cubePositions, onCollision }) => {
  const { nodes, materials } = useGLTF("../models-3D/boat.glb");

  const [position, setPosition] = useState([0, 1.5, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const boatRef = useRef();

  const moveBoat = (event) => {
    const speed = 1;
    let newPosition = [...position];
    let newRotation = [...rotation];

    if (event.key === "ArrowUp") {
      newPosition[2] -= speed;
      newRotation = [0, -Math.PI / 2, 0];
    }
    if (event.key === "ArrowDown") {
      newPosition[2] += speed;
      newRotation = [0, Math.PI / 2, 0];
    }
    if (event.key === "ArrowLeft") {
      newPosition[0] -= speed;
      newRotation = [0, 0, 0];
    }
    if (event.key === "ArrowRight") {
      newPosition[0] += speed;
      newRotation = [0, Math.PI, 0];
    }

    setPosition(newPosition);
    setRotation(newRotation);
  };

  const checkCollision = () => {
    if (!boatRef.current || !Array.isArray(cubePositions) || cubePositions.length === 0) {
      console.warn("No hay cubos en las posiciones definidas.");
      return;
    }

    const boatBox = new THREE.Box3().setFromObject(boatRef.current);

    cubePositions.forEach((cubePos, index) => {
      if (Array.isArray(cubePos) && cubePos.length === 3) {
        const cubeRef = new THREE.Object3D();
        cubeRef.position.set(cubePos[0], cubePos[1], cubePos[2]);
        const cubeBox = new THREE.Box3().setFromObject(cubeRef);

        if (boatBox.intersectsBox(cubeBox)) {
          console.log(`💥 Colisión con el cubo: ${index}`);
          onCollision(index);
        }
      } else {
        console.warn(`Posición inválida del cubo en el índice ${index}:`, cubePos);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", moveBoat);
    return () => {
      window.removeEventListener("keydown", moveBoat);
    };
  }, [position]);

  useEffect(() => {
    checkCollision();
  }, [position]);

  return (
    <group ref={boatRef} position={position} rotation={rotation} dispose={null}>
      <group name="Scene">
        <mesh 
          geometry={nodes.B1_Boat_model.geometry} 
          material={materials.wire_130055020} 
          rotation={[Math.PI / 2, 0, 0]} 
          scale={0.02} 
        />
      </group>
    </group>
  );
};

useGLTF.preload("../models-3D/boat.glb");

export default Boat;