import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

const Desert = () => {
  const [aoMap, colorMap, displacementMap, normalMap, roughnessMap] = useLoader(THREE.TextureLoader, [
    "/materials/Ground0/Ground054_1K-JPG_AmbientOcclusion.jpg",
    "/materials/Ground0/Ground054_1K-JPG_Color.jpg",
    "/materials/Ground0/Ground054_1K-JPG_Displacement.jpg",
    "/materials/Ground0/Ground054_1K-JPG_NormalDX.jpg",
    "/materials/Ground0/Ground054_1K-JPG_NormalGL.jpg",
    "/materials/Ground0/Ground054_1K-JPG_Roughness.jpg",
  ]);

  return (
    <>
    <RigidBody receiveShadow={true}> 
     
      
      
      <Plane
        args={[100, 100, 200, 200]}  
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <meshStandardMaterial
          map={colorMap}
          aoMap={aoMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementScale={0.2} 
          roughness={1}  
          metalness={0} 
          castShadow={true}
          receiveShadow
        />
      </Plane>
    </RigidBody>
    </>
  );
};

export default Desert;