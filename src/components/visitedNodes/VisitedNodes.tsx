import React from "react";
import type { IVisitedNodes } from "./VisitedNodes.models";
import styles from "./VisitedNodes.module.css";

const VisitedNodes = ({ route }: IVisitedNodes) => {
  return (
    <div className={styles["path"]}>
      <h2>Nodos Visitados</h2>
      {route.length > 0 && (
        <>
          <div className={styles["steps"]}>
            <p className={styles["actual-step-title"]}>Nodo Actual</p>
            {route.map((path, i) => (
              <p className={styles["step"]} key={i}>
                {path}
              </p>
            ))}
          </div>
          <div className={styles["gradient"]} />
        </>
      )}
    </div>
  );
};

export default VisitedNodes;
