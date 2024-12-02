import React from "react";
import AnimatedCounter from "../animatedCounter/AnimatedCounter";
import img from "../../logo.png";
import { ITotalInfo } from "./TotalInfo.models";
import styles from './TotalInfo.module.css';

const TotalInfo = ({route, totalCost}: ITotalInfo ) => {
  return (
    <div className={styles["total"]}>
      <img className={styles["logo"]} src={img} alt="Logo Crabi" />
      <div className={styles["from-to-steps"]}>
        <p className={styles["title-initial-step"]}>Paso inicial</p>
        <p className={styles["initial-step"]}>{route[0] ?? "-"}</p>
        <p className={styles["title-last-step"]}>Paso Final</p>
        <p className={styles["last-step"]}>{route.at(-1) ?? "-"}</p>
      </div>

      <h2 className="title-cost">Costo Total</h2>
      <AnimatedCounter className={styles["cost"]} number={totalCost ?? 0} />
    </div>
  );
};

export default TotalInfo;
