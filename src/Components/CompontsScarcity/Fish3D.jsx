import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Fish3D = ({ bottleRef, bottleRef2, onCollision, onCollision2, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3D/BOY2.glb");
  const { actions } = useAnimations(animations, group);

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  // Configurar los controles de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          setMovement((prev) => ({ ...prev, forward: true }));
          break;
        case "ArrowDown":
        case "s":
          setMovement((prev) => ({ ...prev, backward: true }));
          break;
        case "ArrowLeft":
        case "a":
          setMovement((prev) => ({ ...prev, left: true }));
          break;
        case "ArrowRight":
        case "d":
          setMovement((prev) => ({ ...prev, right: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "w":
          setMovement((prev) => ({ ...prev, forward: false }));
          break;
        case "ArrowDown":
        case "s":
          setMovement((prev) => ({ ...prev, backward: false }));
          break;
        case "ArrowLeft":
        case "a":
          setMovement((prev) => ({ ...prev, left: false }));
          break;
        case "ArrowRight":
        case "d":
          setMovement((prev) => ({ ...prev, right: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Controlar la animación según el movimiento
  useEffect(() => {
    if (movement.forward || movement.backward || movement.left || movement.right) {
      if (actions["Walking"] && !actions["Walking"].isRunning()) {
        actions["Idle"]?.stop();
        actions["Walking"].play();
      }
    } else {
      if (actions["Idle"] && !actions["Idle"].isRunning()) {
        actions["Walking"]?.stop();
        actions["Idle"].play();
      }
    }
  }, [movement, actions]);

  // Controlar el movimiento, la rotación del personaje y la cámara
  useFrame((state, delta) => {
    if (!group.current) return;

    const speed = 5; // Velocidad de movimiento
    const position = group.current.position;
    const rotation = group.current.rotation;

    // **Lógica de rotación**
    if (movement.right) rotation.y = -Math.PI / 2; // Rotar hacia la derecha (Y = -90 grados)
    if (movement.left) rotation.y = Math.PI / 2;  // Rotar hacia la izquierda (Y = 90 grados)
    if (movement.backward) rotation.y = Math.PI;  // Rotar hacia atrás (Y = 180 grados)
    if (movement.forward) rotation.y = 0;        // Rotar hacia adelante (Y = 0 grados)

    // **Lógica de movimiento**
    if (movement.forward) position.z -= speed * delta;
    if (movement.backward) position.z += speed * delta;
    if (movement.left) position.x -= speed * delta;
    if (movement.right) position.x += speed * delta;

    // Evitar que el personaje salga del área de juego (opcional)
    position.x = Math.max(Math.min(position.x, 50), -50);
    position.z = Math.max(Math.min(position.z, 50), -50);

    // **Detectar la colisión con la botella 1**
    if (bottleRef?.current) {
      const bottlePosition = bottleRef.current.position;
      const distanceToBottle = position.distanceTo(bottlePosition);
      if (distanceToBottle < 3) { // Umbral de 1 unidad para la colisión
        onCollision(); // Llama a la función de colisión
      }
    }

    // **Detectar la colisión con la botella 2**
    if (bottleRef2?.current) {
      const bottle2Position = bottleRef2.current.position;
      const distanceToBottle2 = position.distanceTo(bottle2Position);
      if (distanceToBottle2 < 3) { // Umbral de 1 unidad para la colisión
        onCollision2(); // Llama a la función de colisión
      }
    }

    // **Logica para mover la cámara**
    const cameraOffset = { x: 0, y: 5, z: 25 }; // Distancia de la cámara con respecto al personaje
    const cameraPosition = state.camera.position;

    // La cámara sigue suavemente la posición del personaje
    const targetPosition = [
      position.x + cameraOffset.x, 
      position.y + cameraOffset.y, 
      position.z + cameraOffset.z
    ];

    cameraPosition.lerp({ x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] }, 0.1);
    state.camera.lookAt(position.x, position.y, position.z);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2 , 0, Math.PI]} scale={0.07}>
          <group name="body">
            <skinnedMesh
              name="body_1"
              geometry={nodes.body_1.geometry}
              material={materials.shirt}
              skeleton={nodes.body_1.skeleton}
            />
            <skinnedMesh
              name="body_2"
              geometry={nodes.body_2.geometry}
              material={materials.shorts}
              skeleton={nodes.body_2.skeleton}
            />
            <skinnedMesh
              name="body_3"
              geometry={nodes.body_3.geometry}
              material={materials.shoe}
              skeleton={nodes.body_3.skeleton}
            />
            <skinnedMesh
              name="body_4"
              geometry={nodes.body_4.geometry}
              material={materials.hair}
              skeleton={nodes.body_4.skeleton}
            />
            <skinnedMesh
              name="body_5"
              geometry={nodes.body_5.geometry}
              material={materials.eye}
              skeleton={nodes.body_5.skeleton}
            />
            <skinnedMesh
              name="body_6"
              geometry={nodes.body_6.geometry}
              material={materials.body}
              skeleton={nodes.body_6.skeleton}
            />
            <skinnedMesh
              name="body_7"
              geometry={nodes.body_7.geometry}
              material={materials.head}
              skeleton={nodes.body_7.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
};

export default Fish3D;