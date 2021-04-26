import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Orco } from "../components/3d/3d";
import { Orco10K } from "../components/3d/orco_10K";
import { CameraControls } from "./controls";
import { Lights } from "./lights";
import { Archive3D } from "../components/3d/archive3D";

export default function Scene3D() {
  return (
    <Canvas
      id="scene-container"
      className="scene-container"
      camera={{
        position: [0, 25, 0],
        fov: [50]
      }}
    >
      {/* <ambientLight intensity={0.25} /> */}
      <Lights />
      <CameraControls />
      <Suspense name="suspense" fallback={null}>
        <Orco10K />
        {/* <Orco_10K /> */}
        <Archive3D />
      </Suspense>
    </Canvas>
  );
}
