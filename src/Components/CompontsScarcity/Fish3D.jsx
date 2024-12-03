import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const Fish3D = ({ bottleRef, bottleRef2, position, onCollision }) => {
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

      if (bottleRef && bottleRef.current) { 
        const fishPosition = new Vector3();
        fishRef.current.getWorldPosition(fishPosition);  
        const bottlePosition = new Vector3();
        bottleRef.current.getWorldPosition(bottlePosition);

        if (fishPosition.distanceTo(bottlePosition) < 3) {
          console.log("¡Colisión con Bottle 1 detectada!");
          if (onCollision) {
            onCollision(); 
          }
        }
      }

      if (bottleRef2 && bottleRef2.current) {
        const fishPosition = new Vector3();
        fishRef.current.getWorldPosition(fishPosition);  
        const bottlePosition2 = new Vector3();
        bottleRef2.current.getWorldPosition(bottlePosition2);

        if (fishPosition.distanceTo(bottlePosition2) < 3) {
          console.log("¡Colisión con Bottle 2 detectada!");
          if (onCollision) {
            onCollision(); 
          }
        }
      }
    }
  });

  return (
    <group ref={fishRef} position={position} dispose={null} rotation={[0, -Math.PI/1, 0]}>
      <group name="Scene">
        <group name="body" scale={7.074}>
          <mesh name="body_1" geometry={nodes.body_1.geometry} material={materials.shirt} castShadow/>
          <mesh name="body_2" geometry={nodes.body_2.geometry} material={materials.shorts} castShadow/>
          <mesh name="body_3" geometry={nodes.body_3.geometry} material={materials.shoe} castShadow/>
          <mesh name="body_4" geometry={nodes.body_4.geometry} material={materials.hair} castShadow/>
          <mesh name="body_5" geometry={nodes.body_5.geometry} material={materials.eye} castShadow/>
          <mesh name="body_6" geometry={nodes.body_6.geometry} material={materials.body} castShadow/>
          <mesh name="body_7" geometry={nodes.body_7.geometry} material={materials.head} castShadow/>
        </group>
      </group>
    </group>
  );
};

export default Fish3D;