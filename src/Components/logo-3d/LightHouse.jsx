import { useRef, useEffect, useState, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3, MeshStandardMaterial } from "three";

const House3D = (props) => {
  const { nodes, materials } = useGLTF("../models-3D/LightHouse.glb");
  const PATH = useMemo(() => "materials/waterconta/rock_face_", []);
  
  const floorTexture = useTexture({
    map: PATH + "diff_1k.jpg",
    displacementMap: PATH + "disp_1k.png",
    normalMap: PATH + "nor_gl_1k.jpg",
    roughnessMap: PATH + "rough_1k.jpg",
    aoMap: PATH + "ao_1k.jpg",
  });

  const houseRef = useRef();
  const speed = 0.5; // Velocidad de movimiento

  const handleLight = () => {
    alert(
      "La contaminación del agua es un problema ambiental crítico. Afecta la salud de los ecosistemas y la vida humana"
    );
  };

  const standardMaterial = useMemo(
    () => new MeshStandardMaterial({ map: floorTexture.map }),
    [floorTexture]
  );

  // Función para manejar el movimiento de la casa
  const moveHouse = (key) => {
    if (houseRef.current) {
      switch (key) {
        case "w":
          houseRef.current.position.z -= speed;
          break;
        case "s":
          houseRef.current.position.z += speed;
          break;
        case "a":
          houseRef.current.position.x -= speed;
          break;
        case "d":
          houseRef.current.position.x += speed;
          break;
        default:
          break;
      }
    }
  };

  // Evento de teclado
  useEffect(() => {
    const handleKeyDown = (event) => moveHouse(event.key);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  return (
    <group ref={houseRef} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.Material}
          position={[0, 3.486, 0]}
          scale={3.917}
          onClick={handleLight}
        />

        <group
          name="Cylinder"
          position={[-2.186, 2.885, -4.276]}
          rotation={[0, 0.331, 0]}
          scale={[0.567, 0.315, 0.567]}>
          <mesh
            name="Cylinder001"
            geometry={nodes.Cylinder001.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cylinder001_1"
            geometry={nodes.Cylinder001_1.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials.Material}
          position={[-0.225, 2.501, -2.682]}
          rotation={[-2.458, -1.402, 0]}
          scale={[-0.37, -0.299, -0.471]}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials.Material}
          position={[-0.746, 2.031, 0.025]}
          rotation={[-2.96, 0.942, -0.824]}
          scale={[-0.37, -0.299, -0.471]}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[-4.101, 3.102, -3.118]}
          rotation={[-2.96, 0.942, -0.824]}
          scale={[-0.37, -0.299, -0.471]}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials.Material}
          position={[-4.044, 3.102, 3.045]}
          rotation={[-2.96, 0.942, -0.824]}
          scale={[-0.641, -0.518, -0.814]}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials.Material}
          position={[-1.374, 1.063, 6.485]}
          rotation={[-0.208, -1.031, 2.285]}
          scale={[-0.933, -0.754, -1.185]}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials.Material}
          position={[2.905, 2.04, -1.414]}
          rotation={[-0.109, 0.235, 2.49]}
          scale={[-0.713, -0.576, -0.906]}
        />
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials.Material}
          position={[1.748, 2.898, -5.376]}
          rotation={[-0.128, -0.587, 2.394]}
          scale={[-1.136, -0.918, -1.443]}
        />
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials.Material}
          position={[2.532, 2.656, -4.693]}
          rotation={[-2.136, -1.445, 0.325]}
          scale={[-0.272, -0.219, -0.345]}
        />
        <mesh
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={materials.Material}
          position={[0.421, 2.941, -4.358]}
          rotation={[-2.136, -1.445, 0.325]}
          scale={[-0.272, -0.219, -0.345]}
        />
        <mesh
          name="Cube010"
          geometry={nodes.Cube010.geometry}
          material={materials.Material}
          position={[0.214, 2.824, -4.051]}
          rotation={[-2.136, -1.445, 0.325]}
          scale={[-0.192, -0.155, -0.244]}
        />
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials.Material}
          position={[0.705, 2.824, -4.051]}
          rotation={[-2.941, 1.008, -0.847]}
          scale={[-0.192, -0.155, -0.244]}
        />
        <mesh
          name="Cube012"
          geometry={nodes.Cube012.geometry}
          material={materials.Material}
          position={[-2.423, 2.586, 1.45]}
          rotation={[-0.188, -0.965, 2.31]}
          scale={[-0.641, -0.518, -0.814]}
        />
        <mesh
          name="Cube013"
          geometry={nodes.Cube013.geometry}
          material={materials.Material}
          position={[1.962, -0.36, 9.622]}
          rotation={[0.056, -0.473, 2.795]}
          scale={[-0.933, -0.754, -1.185]}
        />
        <mesh
          name="Cube014"
          geometry={nodes.Cube014.geometry}
          material={materials.Material}
          position={[3.494, -0.36, 4.545]}
          rotation={[0.056, -0.473, 2.795]}
          scale={[-0.933, -0.754, -1.185]}
        />
        <mesh
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={materials.Material}
          position={[3.494, 0.422, -7.732]}
          rotation={[-2.835, 0.194, 1.259]}
          scale={[-1.379, -1.086, -2.202]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={standardMaterial}
          position={[0.028, 0.443, 0.461]}
          scale={18.54}
        />
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={standardMaterial}
          position={[-4.345, 0.422, -6.185]}
          rotation={[-0.314, -0.295, -1.916]}
          scale={[-1.379, -1.086, -2.202]}
        />
        <mesh
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={standardMaterial}
          position={[-4.345, 0.422, 6.492]}
          rotation={[-0.314, -0.295, -1.916]}
          scale={[-1.379, -1.086, -2.202]}
        />
        <mesh
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={standardMaterial}
          position={[-4.345, -0.62, -4.837]}
          rotation={[-0.314, -0.295, -1.916]}
          scale={[-1.162, -0.915, -1.856]}
        />
        <mesh
          name="Cube019"
          geometry={nodes.Cube019.geometry}
          material={standardMaterial}
          position={[12.001, -1.209, 5.409]}
          rotation={[-2.835, 0.194, 1.259]}
          scale={[-1.927, -1.518, -3.077]}
        />
        <mesh
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={standardMaterial}
          position={[5.119, -0.41, 14.529]}
          rotation={[-0.301, 0.082, -1.796]}
          scale={[-1.121, -0.883, -1.79]}
        />
        <group
          name="Area"
          position={[-1.763, 6.513, -3.487]}
          rotation={[0.19, -1.21, 1.356]}
          scale={0.725}
        />
      </group>
    </group>
  );
};

useGLTF.preload("../models-3D/LightHouse.glb");

export default House3D;
