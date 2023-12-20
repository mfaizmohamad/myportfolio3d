import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { IslandScene, DragonScene, Cloud } from "../../models";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapsize={1024}
      />
      <Cloud
        scale={[0.1, 0.1, 0.1]}
        position={[0, 0.3, -1]}
        rotation={[0, 0, 0]}
      />

      <Cloud
        scale={[0.05, 0.05, 0.05]}
        position={[3, -1, -1]} 
        rotation={[0, 0, 0]}
      />

      <Cloud
        scale={[0.05, 0.05, 0.05]}
        position={[-3, -1, -1]}
        rotation={[0, 0, 0]}
      />

      <DragonScene
        scale={[30, 30, 30]}
        position={[1, 0.2, 0.5]}
        rotation={[0, 0, 0]}
      />
      <IslandScene
        scale={[0.01, 0.01, 0.01]}
        position={[0.5, -1.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
