import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";

import cloudScene from "../assets/3d/clouds.glb";

const Cloud = ({ isRotating, setIsRotating, ...props }) => {
  const cloudRef = useRef();

  const { nodes, materials } = useGLTF(cloudScene);

  return (
    <group ref={cloudRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.036}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.defaultMaterial.geometry}
          material={materials.base1}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

export default Cloud;
