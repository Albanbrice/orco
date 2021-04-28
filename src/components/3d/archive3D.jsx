import React, { useRef } from "react";
import { Vector3, Euler, MathUtils } from "three";
import { useTexture } from "@react-three/drei";
import { useStore } from "../../store";
//import img from "../../assets/archives/Orco-01-0002.jpg";
// import archiveData from "../../assets/json/archives.json";

let archiveData = require("../../assets/json/archives.json");

const Archive3D = (name) => {
  //const archiveData = fetch("../../assets/json/archives.json").then((resp) => resp.json());

  console.log(archiveData[1]);
  //const archiveData = useStore((state) => state.archives);
  const archive = archiveData.find((arch) => arch.name === name);

  const { X, Y, Z, rotX, rotY, rotZ, size, scale, width, height } = archive;

  let taille = size * scale;
  let ratio = height / width;

  const ref = useRef();

  const pos = new Vector3(X, Z, -Y);

  const rot = new Euler(
    -MathUtils.degToRad(rotX) + Math.PI / 2,
    MathUtils.degToRad(rotZ),
    MathUtils.degToRad(rotY),
    "XYZ"
  );

  // OK approx
  const rot3 = new Euler(
    Math.PI / 2 - MathUtils.degToRad(rotX),
    MathUtils.degToRad(rotZ),
    MathUtils.degToRad(-rotY),
    "XYZ"
  );

  // OK pour PLAN
  const rot2 = new Euler(
    //Math.PI / 2 - MathUtils.degToRad(rotX),
    //MathUtils.degToRad(rotZ),
    //MathUtils.degToRad(-rotY),
    -Math.PI / 2 + MathUtils.degToRad(rotX),
    MathUtils.degToRad(rotY),
    MathUtils.degToRad(rotZ),
    "XYZ"
  );

  // const quat = new Quaternion(0.238468, -0.665682, -0.680944, 0.190564);
  const archImg = useTexture(`../../assets/archives/${name}.jpg`);

  return (
    <mesh
      ref={ref}
      name={name}
      rotation={[rot.x, rot.y, rot.z]}
      position={[pos.x, pos.y, pos.z]}
    >
      <planeBufferGeometry attach="geometry" args={[taille, taille * ratio]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent={false}
        opacity={1}
        map={archImg}
      />
    </mesh>
  );
};

export { Archive3D };
