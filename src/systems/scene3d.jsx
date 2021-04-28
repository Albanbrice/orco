import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Orco } from "../components/3d/orco";
import { Orco10K } from "../components/3d/orco_10K";
// import { Camera } from "./camera";
import { Lights } from "./lights";
import { Archive3D } from "../components/3d/archive3D";

const archives = ["Orco-01-0001", "Orco-01-0002", "Orco-04-0015"];

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
      {/* <Camera /> */}
      <Suspense name="suspense" fallback={null}>
        <Orco10K />
        {/* <Orco_10K /> */}
        {archives.map((item, index) => (
          <Archive3D key={index} name={item} />
        ))}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
