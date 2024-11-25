import { Plane } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
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
      <directionalLight
        position={[10, 20, 10]}
        intensity={1.5} 
        castShadow
      />
      <directionalLight
        position={[-10, 20, -10]}
        intensity={0.7}
        color="white"
      />
      <ambientLight intensity={0.5} color="white" />
      
      <Plane
        args={[100, 100, 100, 100]}
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
          displacementScale={0.5}
          roughness={5} 
          metalness={0} 
        />
      </Plane>
    </>
  );
};

export default Desert;