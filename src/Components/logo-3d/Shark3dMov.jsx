import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useCallback, useRef } from "react";
import { RigidBody, BallCollider } from "@react-three/rapier";

const Shark3DMov = (props) => {
  const shark3DMovuseRef = useRef(null);
  const { nodes, materials, animations } = useGLTF(
    "../models-3D/Shark3DMov.glb"
  );

  const handleShark3D = useCallback(() => {
    shark3DMovuseRef.current.addTorque({ x: 0, y: 1, z: -5 }, true);
  }, []);

  return (
    <RigidBody
      ref={shark3DMovuseRef}
      type="kinematic"
      gravityScale={0}
      colliders={false}
      friction={2}
    >
      <mesh {...props} onClick={handleShark3D}>
        <group>
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
                  <group name="Spine113" rotation={[0.097, Math.PI / 2, 0]}>
                    <group
                      name="Spine214"
                      position={[222.443, 0.001, 0]}
                      rotation={[0, 0, -0.053]}
                    >
                      <group
                        name="Spine315"
                        position={[254.681, 0.001, 0]}
                        rotation={[0, 0, -0.047]}
                      >
                        <group
                          name="Spine416"
                          position={[163.556, 0, 0]}
                          rotation={[0, 0, 0.004]}
                        >
                          <group
                            name="Spine517"
                            position={[171.359, 0, 0]}
                            rotation={[0, 0, -0.028]}
                          >
                            <group
                              name="Spine618"
                              position={[171.425, -0.002, 0]}
                              rotation={[0, 0, -0.073]}
                            >
                              <group
                                name="Spine719"
                                position={[41.012, -0.001, 0]}
                              />
                              <group
                                name="BackFinT120"
                                position={[66.017, 66.3, 0]}
                                rotation={[0, 0, 1.034]}
                              >
                                <group
                                  name="BackFinT221"
                                  position={[115.997, 0.002, 0]}
                                  rotation={[0, 0, -0.152]}
                                >
                                  <group
                                    name="BackFinT322"
                                    position={[87.852, -0.003, 0]}
                                  />
                                </group>
                              </group>
                              <group
                                name="BackFinB123"
                                position={[91.23, -72.46, 0]}
                                rotation={[0, 0, -0.943]}
                              >
                                <group
                                  name="BackFinB224"
                                  position={[81.228, 0, 0]}
                                  rotation={[0, 0, 0.161]}
                                >
                                  <group
                                    name="BackFinB325"
                                    position={[78.136, 0.001, 0]}
                                    rotation={[0, 0, -0.04]}
                                  />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="DorsalFin126"
                        position={[136.878, 167.318, 0]}
                        rotation={[0, 0, 1.194]}
                      >
                        <group
                          name="DorsalFin227"
                          position={[77.104, 0.001, 0]}
                          rotation={[0, 0, -0.139]}
                        >
                          <group
                            name="DorsalFin328"
                            position={[74.567, 0, 0]}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="L_Fin129"
                      position={[135.269, -77.308, 154.751]}
                      rotation={[-0.358, -1.301, -0.798]}
                    >
                      <group
                        name="L_Fin230"
                        position={[79.545, 0.001, 0]}
                        rotation={[-0.101, 0.218, -0.092]}
                      >
                        <group name="L_Fin331" position={[98.771, -0.001, 0]} />
                      </group>
                    </group>
                    <group
                      name="R_Fin132"
                      position={[135.269, -77.308, -154.751]}
                      rotation={[0.358, 1.301, 2.344]}
                    >
                      <group
                        name="R_Fin233"
                        position={[-79.545, -0.001, 0]}
                        rotation={[-0.101, 0.218, -0.092]}
                      >
                        <group
                          name="R_Fin334"
                          position={[-98.772, 0, -0.001]}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="Shark3DMov002" />
            </group>
          </group>
        </group>
      </mesh>
      <BallCollider args={[1]} position={props.position} />
    </RigidBody>
  );
};

useGLTF.preload("../models-3D/Shark3DMov.glb");

export default Shark3DMov;




