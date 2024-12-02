import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

const Cactus = (props) => {
    const { nodes, materials } = useGLTF('../models-3D/Cactus.glb')
    const cactusRef = useRef();
    return (
        <group {...props} dispose={null}>
          <RigidBody ref={cactusRef} colliders=''>
            <group name="Scene">
              <mesh
                name="10436_Cactus_v1_max2010_it2"
                geometry={nodes['10436_Cactus_v1_max2010_it2'].geometry}
                material={materials['10436_Cactus_v1']}
                scale={[0.05, 0.05, 0.05]}
                castShadow
              />
            </group>
          </RigidBody>
         
        </group>
    );
};
    
useGLTF.preload('../models-3D/Cactus.glb')

export default Cactus;