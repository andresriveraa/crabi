import React from "react";
import type { IVisitedNodes } from "./VisitedNodes.models";


const VisitedNodes = ({ route }: IVisitedNodes) => {
  return (
    <div className="path">
      <h2>Nodos Visitados</h2>
      {route.length > 0 && (
        <>
          <div className="steps">
            <p className="actual-step-title">Nodo Actual</p>
            {route.map((path, i) => (
              <p className="step" key={i}>
                {path}
              </p>
            ))}
          </div>
          <div className="gradient" />
        </>
      )}
    </div>
  );
};

export default VisitedNodes;
