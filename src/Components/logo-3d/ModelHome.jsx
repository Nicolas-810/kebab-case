import { useGLTF } from "@react-three/drei";

const Home3D = (props) => {
    const { nodes, materials } = useGLTF('../models-3D/AngelFish.glb')

    return (
        <group {...props} dispose={null}>
          <group name="Scene">
            <mesh
              name="AngelFish_Royal_Instance_Wander"
              geometry={nodes.AngelFish_Royal_Instance_Wander.geometry}
              material={materials.AngelFish_Royal_Instanced_Indirect}
              position={[0.556, -0.604, -0.431]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={37.253}
              onClick={() => alert("¡toca suave a camaleon!")} // Nuevo mensaje de alerta
            />
          </group>
        </group>
    )
};
    
useGLTF.preload('../models-3D/AngelFish.glb')

export default Home3D;