import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

const Boat = (props) => {
  const { nodes, materials } = useGLTF("../models-3D/boat.glb");

  const [position, setPosition] = useState([0, -2, 0]);  
  const [rotation, setRotation] = useState([0, -2, 0]);

  const boatRef = useRef();

  const moveBoat = (event) => {
    const speed = 5;
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
      newRotation = [0, Math.PI / 12, 0]; 
    }
    if (event.key === "ArrowRight") {
      newPosition[0] += speed; 
      newRotation = [-Math.PI, 0, Math.PI]; 
    }

    setPosition(newPosition); 
    setRotation(newRotation); 
  };

  useEffect(() => {
    window.addEventListener("keydown", moveBoat);

    return () => {
      window.removeEventListener("keydown", moveBoat);
    };
  }, [position, rotation]);

  return (
    <group ref={boatRef} {...props} position={position} rotation={rotation} dispose={null}>
      <group name="Scene">
        <mesh
          name="B1_Boat_model"
          geometry={nodes.B1_Boat_model.geometry}
          material={materials.wire_130055020}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.05}
        />
      </group>
    </group>
  );
};

useGLTF.preload("../models-3D/boat.glb");

export default Boat;