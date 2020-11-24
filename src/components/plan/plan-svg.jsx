import React, { useMemo } from "react";
import { useStore } from "../../store";
import { normalize } from "../../systems/functions";
import {
  Compass,
  Scenes,
  Marches,
  Escalier,
  Lignes,
  Parois
} from "./plan-svg-src.jsx";

import "./plan-svg.css";

// 2D cartesian bounding box of the SVG drawing, in real units (meters)
const xmin = -13.535;
const ymin = -18.565;

const xmax = 16.165;
const ymax = 11.135;

function CreatePlan() {
  return (
    <div id="plan">
      <svg
        id="orco"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1122.24 1122.24"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <Parois />
        <Lignes />
        <Escalier />
        <Marches />
        <Scenes />
      </svg>
    </div>
  );
}

const SetupCompass = () => {
  const position = useStore((state) => state.position);

  const pos = useMemo(() => position, [position]);

  const camX = pos.x;
  const camZ = pos.z;

  let posX = normalize(xmin, xmax, camX);
  let posZ = normalize(ymin, ymax, camZ);

  let dim = 495; // in px, will try to find a way to retrieve the div 'plan-svg' dimensions

  let x = posX * dim - 32;
  let y = (1 - posZ) * dim + 32;

  return (
    <div id="compass" style={{ left: x, bottom: y }}>
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <Compass />
      </svg>
    </div>
  );
};

export default function CreatePlanSvg() {
  return (
    <div id="plan-svg">
      <CreatePlan />
      <SetupCompass />
    </div>
  );
}
