import { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";



const Shark3D = (props) => {
    const { nodes, materials } = useGLTF('../models-3D/WhaleShark.glb')


    return (
      <group {...props} dispose={null}>
        <group name="Scene">
          <mesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials['PufferFish.004']}
            position={[-3.052, 0.421, -0.024]}
            rotation={[Math.PI / 2, 0, -1.569]}
          />
        </group>
      </group>
    )
};
    

useGLTF.preload('../models-3D/WhaleShark.glb')

export default Shark3D;