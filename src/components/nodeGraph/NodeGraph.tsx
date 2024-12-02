import React from "react";
import Canvas from "../../components/canvas/Canvas";
import { INodeGraph } from "./NodeGraph.models";
import styles from './/NodeGraph.module.css';


const NodeGraph = ({neighborgs, onClickNode, actualNode}: INodeGraph) => {
  return (
    <div className={styles["nodes-list"]}>
      <h2 className={styles["title"]}>Elige un nodo:</h2>
      <p className={styles["description"]}>
        Da click en algun nodo para comenzar, o elige el siguiente nodo
        habilitado:
      </p>
      <Canvas
        neighborgs={neighborgs?.map((n) => n.to) ?? []}
        onClickNode={onClickNode}
        actualNode={actualNode}
      />
    </div>
  );
};

export default NodeGraph;
