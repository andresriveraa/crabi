import React from "react";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";
import img from "../../logo.png";
import { ITotalInfo } from "./TotalInfo.models";

const TotalInfo = ({route, totalCost}: ITotalInfo ) => {
  return (
    <div className="total">
      <img className="logo" src={img} alt="Logo Crabi" />
      <div className="from-to-steps">
        <p className="title-initial-step">Paso inicial</p>
        <p className="initial-step">{route[0] ?? "-"}</p>
        <p className="title-last-step">Paso Final</p>
        <p className="last-step">{route.at(-1) ?? "-"}</p>
      </div>

      <h2 className="title-cost">Costo Total</h2>
      <AnimatedCounter className="cost" number={totalCost ?? 0} />
    </div>
  );
};

export default TotalInfo;
