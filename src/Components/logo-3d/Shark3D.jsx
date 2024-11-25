import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Shark3D = (props) => {
  const { nodes, materials, animations } = useGLTF("../models-3D/WhaleShark.glb");
  const sharkRef = useRef();
  const [speed] = useState(0.5); // Velocidad de movimiento

  const { actions } = useAnimations(animations, sharkRef);
  console.log(actions);

  // Efectos de teclado para mover el tiburón
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (sharkRef.current) {
        // Prevenir el comportamiento predeterminado de las flechas y las letras
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(event.key)) {
          event.preventDefault();
        }

        switch (event.key.toLowerCase()) { // Convertir la tecla a minúscula para mayor compatibilidad
          case "arrowup":
          case "w":
            sharkRef.current.position.z -= speed; // Mover hacia adelante
            break;
          case "arrowdown":
          case "s":
            sharkRef.current.position.z += speed; // Mover hacia atrás
            break;
          case "arrowleft":
          case "a":
            sharkRef.current.position.x -= speed; // Mover hacia la izquierda
            break;
          case "arrowright":
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
          position={[-3.052, 0.421, -0.024]} // Ajusta la posición inicial si es necesario
          rotation={[Math.PI / 2, 0, -1.569]} // Ajusta la rotación inicial si es necesario
          onClick={() => alert("¡Cuidemos nuestros océanos y la vida marina!")}
        />
      </group>
    </group>
  );
};

useGLTF.preload("../models-3D/WhaleShark.glb");

export default Shark3D;