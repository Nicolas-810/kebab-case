import { useGLTF } from "@react-three/drei";

const Paper = ({ position, scale }) => {
  const { nodes, materials } = useGLTF("../models-3D/Paper.glb");

  return (
    <>
      <mesh
        name="Paper_06_GEO"
        geometry={nodes.Paper_06_GEO.geometry}
        material={materials.Paper6x}
        position={position}  
        scale={scale} 
      />
      <mesh
        name="Paper_05_GEO"
        geometry={nodes.Paper_05_GEO.geometry}
        material={materials.Paper6x}
        position={[position[0] + 1, position[1], position[2]]}  
        scale={scale}
      />
      <mesh
        name="Paper_04_GEO"
        geometry={nodes.Paper_04_GEO.geometry}
        material={materials.Paper6x}
        position={[position[0] + 2, position[1], position[2]]} 
        scale={scale}
      />
      <mesh
        name="Paper_03_GEO"
        geometry={nodes.Paper_03_GEO.geometry}
        material={materials.Paper6x}
        position={[position[0] + 3, position[1], position[2]]}  
        scale={scale}
      />
      <mesh
        name="Paper_02_GEO"
        geometry={nodes.Paper_02_GEO.geometry}
        material={materials.Paper6x}
        position={[position[0] + 4, position[1], position[2]]}  
        scale={scale}
      />
      <mesh
        name="Paper_01_GEO"
        geometry={nodes.Paper_01_GEO.geometry}
        material={materials.Paper6x}
        position={[position[0] + 5, position[1], position[2]]}  
        scale={scale}
      />
    </>
  );
};

useGLTF.preload("../models-3D/Paper.glb");

export default Paper;