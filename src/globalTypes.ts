
export type Edge = {
  from: string;
  to: string;
  cost: number;
};

export type Graph = {
  nodes: string[];
  edges: Edge[];
};