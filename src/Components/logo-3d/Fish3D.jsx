import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Fish3D = ({ rocks, position, onCollision }) => {
  const { nodes, materials } = useGLTF("../models-3D/BOY2.glb");
  const fishRef = useRef();
  const speed = 0.5;
  
  const [isJumping, setIsJumping] = useState(false);
  const [jumpHeight, setJumpHeight] = useState(0);

  const jumpSpeed = 0.1; 
  const maxJumpHeight = 2; 
  const bounceSpeed = 0.02; 

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
          case " ":
            if (!isJumping) {
              setIsJumping(true);
            }
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isJumping]);

  useFrame(() => {
    if (fishRef.current) {
      if (!isJumping) {
        fishRef.current.position.y = Math.sin(Date.now() * bounceSpeed) * 0.1;
      }

      if (isJumping) {
        setJumpHeight((prevHeight) => Math.min(prevHeight + jumpSpeed, maxJumpHeight));
        fishRef.current.position.y = jumpHeight;

        if (jumpHeight >= maxJumpHeight) {
          setIsJumping(false);
          setJumpHeight(0);
        }
      }

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
      <group name="Scene">
        <group name="body" scale={7.074}>
          <mesh name="body_1" geometry={nodes.body_1.geometry} material={materials.shirt} />
          <mesh name="body_2" geometry={nodes.body_2.geometry} material={materials.shorts} />
          <mesh name="body_3" geometry={nodes.body_3.geometry} material={materials.shoe} />
          <mesh name="body_4" geometry={nodes.body_4.geometry} material={materials.hair} />
          <mesh name="body_5" geometry={nodes.body_5.geometry} material={materials.eye} />
          <mesh name="body_6" geometry={nodes.body_6.geometry} material={materials.body} />
          <mesh name="body_7" geometry={nodes.body_7.geometry} material={materials.head} />
        </group>
      </group>
    </group>
  );
};

export default Fish3D;