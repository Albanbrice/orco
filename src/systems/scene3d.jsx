import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Orco } from "../components/3d/3d";
import { CameraControls } from "./controls";
import { Lights } from "./lights";

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
        <Orco />
      </Suspense>
    </Canvas>
  );
}
