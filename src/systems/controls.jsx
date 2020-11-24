import React, { useRef } from "react";
import { useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useStore } from "../store";

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree();

  const controls = useRef();
  const orbitStatus = useStore((state) => state.orbitEnabled);

  const { setPosition } = useStore();

  useFrame((state) => {
    setPosition(controls.current.object.position);
    controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enabled={orbitStatus}
      rotateSpeed={0.4}
      enableZoom={true}
      enablePan={true}
      enableDamping={true}
      dampingFactor={0.4}
      enableKeys={true}
      screenSpacePanning={true}
      maxDistance={200}
    />
  );
};

export { CameraControls };
