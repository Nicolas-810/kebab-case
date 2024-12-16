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
    </>
  );
};

useGLTF.preload("../models-3D/Paper.glb");

export default Paper;