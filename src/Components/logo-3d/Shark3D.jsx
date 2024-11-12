import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Shark3D = (props) => {
  const { nodes, materials } = useGLTF("../models-3D/WhaleShark.glb");
  const sharkRef = useRef();
  const [speed] = useState(0.5); // Velocidad de movimiento

  // Efectos de teclado para mover el tiburón
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (sharkRef.current) {
        switch (event.key) {
          case "ArrowUp":
          case "s":
            sharkRef.current.position.z -= speed; // Mover hacia adelante
            break;
          case "ArrowDown":
          case "w":
            sharkRef.current.position.z += speed; // Mover hacia atrás
            break;
          case "ArrowLeft":
          case "a":
            sharkRef.current.position.x -= speed; // Mover hacia la izquierda
            break;
          case "ArrowRight":
          case "d":
            sharkRef.current.position.x += speed; // Mover hacia la derecha
            break;
          default:
            break;
        }
      }
    };

    // Escuchar eventos de teclado
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [speed]);

  return (
    <group ref={sharkRef} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Body"
          geometry={nodes.Body.geometry}
          material={materials["PufferFish.004"]}
          position={[-3.052, 0.421, -0.024]} // Asegúrate de que esta posición sea visible
          rotation={[Math.PI / 2, 0, -1.569]}
          onClick={() => alert("¡Cuidemos nuestros océanos y la vida marina!")} // Nuevo mensaje de alerta
        />
      </group>
    </group>
  );
};

useGLTF.preload("../models-3D/WhaleShark.glb");

export default Shark3D;
