import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

function Orco(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/orco_30K.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          material={materials.Material}
          geometry={nodes.orco2_2mm_IM_TEX038.geometry}
        />
        <mesh
          material={materials.Material}
          geometry={nodes["orco2_2mm_IM_TEX.038_1"].geometry}
        />
        <mesh
          material={materials.Material}
          geometry={nodes["orco2_2mm_IM_TEX.038_2"].geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/orco_30K.glb");

export { Orco };
