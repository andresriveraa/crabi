import { Graph } from "./globalTypes";

export const GRAPHGS: Graph = {
  nodes: ["A", "B", "C", "D", "E"],
  edges: [
    { from: "A", to: "B", cost: 13 },
    { from: "A", to: "C", cost: 11 },
    { from: "B", to: "C", cost: 9 },
    { from: "C", to: "D", cost: 20 },
    { from: "D", to: "E", cost: 15 },
    { from: "E", to: "C", cost: 4 },
  ],
};
