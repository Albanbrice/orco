import React from "react";
import Scene3D from "./systems/scene3d";
import CreatePlanSvg from "./components/plan/plan-svg";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Scene3D />
      <CreatePlanSvg />
    </div>
  );
}
