import React from "react";
import "./App.css";
import useNetworkNodes from "./customHooks/useNetworkNodes";
import VisitedNodes from "./components/visitedNodes/VisitedNodes";
import TotalInfo from "./components/totalInfo/TotalInfo";
import NodeGraph from "./components/nodeGraph/NodeGraph";

const App = () => {
  const { neighborgs, actualNode, route, totalCost, onClickNode } =
    useNetworkNodes();

  return (
    <div className="home">
      <VisitedNodes route={route} />
      <TotalInfo totalCost={totalCost} route={route} />
      <NodeGraph
        neighborgs={neighborgs}
        actualNode={actualNode}
        onClickNode={onClickNode}
      />
    </div>
  );
};

export default App;
