import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; 

const Rock = ({ position, speed, rockRef }) => {
  useFrame(() => {
    if (rockRef.current) {
      rockRef.current.position.z -= speed;
      if (rockRef.current.position.z < -30) {
        rockRef.current.position.z = 30;
      }
    }
  });

  return (
    <Sphere ref={rockRef} position={position} args={[2, 16, 16]}> 
      <meshStandardMaterial color="gray" />
    </Sphere>
  );
};

export default Rock;