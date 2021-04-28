import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Vector3, Euler } from "three";

function Orco(props) {
  const group = useRef();
  const { nodes } = useGLTF("/models/orco_30K.glb");
  const mat = new MeshStandardMaterial({
    roughness: 0.5,
    metalness: 0,
    color: "moccasin",
    emissive: 0,
    transparent: false,
    opacity: 0.85
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={mat} geometry={nodes.orco2_2mm_IM_TEX038.geometry} />
        <mesh
          // material={materials.Material}
          material={mat}
          geometry={nodes["orco2_2mm_IM_TEX.038_1"].geometry}
        />
        <mesh
          material={mat}
          geometry={nodes["orco2_2mm_IM_TEX.038_2"].geometry}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/orco_30K.glb");

export { Orco };
