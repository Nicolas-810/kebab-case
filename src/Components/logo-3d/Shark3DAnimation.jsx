import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";

const Shark3DMovAnimation = (props) => {
  const shark3DRef = useRef();
  const { nodes, materials, animations } = useGLTF("../models-3D/Shark3DMov.glb");
  const { actions } = useAnimations(animations, shark3DRef);

  useEffect(() => {
    if (actions && actions["swimming"]) {
      actions["swimming"].play(); // Reproducir animación
    } else {
      console.warn("La animación 'swimming' no se encuentra disponible.");
    }

    // Asegurarse de que la animación exista antes de intentar detenerla
    return () => {
      if (actions && actions["swimming"]) {
        actions["swimming"].stop(); // Detener animación al desmontar
      } else {
        console.warn("No se pudo detener la animación 'swimming', no está disponible.");
      }
    };
  }, [actions]);

  console.log("Acciones disponibles:", actions); // Depuración de animaciones

  return (
    <RigidBody type="fixed">
      <group ref={shark3DRef} {...props} dispose={null}>
        <group name="Scene">
          <group name="Shark3DMov" scale={0.01}>
            <group name="Shark3DMov001">
              <mesh
                name="shark2"
                geometry={nodes.shark2.geometry}
                material={materials.Material_0}
              />
              <group name="shark_root4" position={[0, 158.043, 358.962]}>
                <group
                  name="Head5"
                  position={[8.394, 0, 0]}
                  rotation={[0, -1.571, 0]}
                >
                  <group
                    name="Jaw6"
                    position={[0, -58.076, 0]}
                    rotation={[0, 0, -0.389]}
                  />
                  <group
                    name="L_Eye7"
                    position={[253.678, 18.29, -96.186]}
                    rotation={[3.14, 0.301, 3.14]}
                  />
                  <group
                    name="R_Eye8"
                    position={[254.028, 18.336, 95.455]}
                    rotation={[-3.14, -0.301, 3.14]}
                  />
                  <group
                    name="R_upper_Lip9"
                    position={[255.309, -67.457, 71.03]}
                  />
                  <group
                    name="Center_upper_Lip10"
                    position={[306.17, -76.813, -3.949]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  />
                  <group
                    name="L_upper_Lip11"
                    position={[255.309, -67.457, -71.03]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                  />
                  <group
                    name="Upper_Teeth12"
                    position={[245.498, -66.952, 0]}
                  />
                </group>
                {/* Continúa con los elementos restantes */}
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload("../models-3D/Shark3DMov.glb");

export default Shark3DMovAnimation;
