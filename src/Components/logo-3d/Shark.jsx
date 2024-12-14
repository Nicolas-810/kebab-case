import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function Shark(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../models-3D/Shark.glb')
  const { actions } = useAnimations(animations, group)

    useEffect(()=>{
        actions ["circling"]?.play()
    }, [actions])
  return (
    <RigidBody
    
    >
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Mesh" scale={0.001}>
          <skinnedMesh
            name="Shark"
            geometry={nodes.Shark.geometry}
            material={materials.SharkMaterial}
            skeleton={nodes.Shark.skeleton}
          />
          <primitive object={nodes.shark_root4} />
        </group>
      </group>
    </group>
    </RigidBody>
  )
}

useGLTF.preload('../models-3D/Shark.glb')

export default Shark;