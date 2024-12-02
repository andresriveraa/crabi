/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import { GRAPHGS } from "../data";
import { Graph } from "../globalTypes";

const useNetworkNodes = () => {
  const node = GRAPHGS.nodes;
  const edges = GRAPHGS.edges;
  const [actualNode, setActualNode] = useState<string>();
  const [route, setRoute] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [neighborgs, setNeighborgs] = useState<Graph["edges"]>();
  const [costUnusedEdge, setCostUnusedEdge] = useState<number>(0);

  const setNewNeighbours = () => {
    const firstNeighbours = edges.filter((edge) => edge.from === actualNode);
    if (firstNeighbours) setNeighborgs(firstNeighbours);
  };

  const calculateAndSetTotal = () => {
    const edgeUsed = neighborgs?.find((k) => k.to === actualNode);
    if (edgeUsed === undefined) return 0;

    const totalCostWithUnUsedEdge =
      totalCost + (edgeUsed?.cost ?? 0) + costUnusedEdge * 2;

    setTotalCost(totalCostWithUnUsedEdge);
    return totalCostWithUnUsedEdge;
  };

  const getCostUnUsedEdge = () => {
    const findEdgeNotUsed = neighborgs?.find((k) => k.to !== actualNode);
    if (findEdgeNotUsed) setCostUnusedEdge(findEdgeNotUsed.cost);
    else setCostUnusedEdge(0);
  };

  const onClickNode = (nodeLabel: string) => {
    setActualNode(nodeLabel);
    setRoute((prev) => [...prev, nodeLabel]);
  };

  useMemo(() => {
    if (neighborgs && neighborgs?.length > 0) {
      calculateAndSetTotal();
      getCostUnUsedEdge();
      setNewNeighbours();
    } else {
      setNewNeighbours();
    }
  }, [actualNode]);

  return {
    node,
    actualNode,
    neighborgs,
    route,
    totalCost,
    onClickNode,
  };
};

export default useNetworkNodes;
