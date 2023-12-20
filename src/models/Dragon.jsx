import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import dragon from '../assets/3d/dragongold.glb';

const DragonScene = (props) => {
  const dragonRef = useRef();
  const { nodes, materials, animations } = useGLTF(dragon);
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    actions["RideIdle"].play();
  },[]);

  return (
    <group ref={dragonRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="00011fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="00011">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.fei_long}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <group
                      name="Object_7"
                      position={[0, 0, -0.003]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="body"
                      position={[0, 0, -0.003]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <group
                      name="ride"
                      position={[-0.003, 2.877, -0.163]}
                      rotation={[0.001, -0.055, 0]}
                    />
                    <group name="shadow" scale={2}>
                      <group
                        name="Quad"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={1.5}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default DragonScene;



