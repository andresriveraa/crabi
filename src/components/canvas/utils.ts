import { GRAPHGS } from "../../data";
import { Edge, Node } from "./class";


export function generateGraph(
  canvasWidth: number,
  canvasHeight: number,
  neighborgs: string[]
): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const positions: { [key: string]: { x: number; y: number } } = {
    A: { x: canvasWidth * 0.2, y: canvasHeight * 0.2 },
    B: { x: canvasWidth * 0.8, y: canvasHeight * 0.2 },
    C: { x: canvasWidth * 0.5, y: canvasHeight * 0.5 },
    D: { x: canvasWidth * 0.2, y: canvasHeight * 0.8 },
    E: { x: canvasWidth * 0.8, y: canvasHeight * 0.8 },
  };

  GRAPHGS.nodes.forEach((label) => {
    const pos = positions[label] || {
      x: Math.random() * (canvasWidth - 100) + 50,
      y: Math.random() * (canvasHeight - 100) + 50,
    };

    const enabled = neighborgs.length > 0 ? neighborgs.includes(label) : true;
    nodes.push(new Node(label, pos.x, pos.y, 20, enabled));
  });

  const nodeMap: Map<string, Node> = new Map();
  nodes.forEach((node) => nodeMap.set(node.label, node));

  GRAPHGS.edges.forEach((edge) => {
    const fromNode = nodeMap.get(edge.from);
    const toNode = nodeMap.get(edge.to);
    if (fromNode && toNode) {
      edges.push(new Edge(fromNode, toNode, edge.cost));
    }
  });

  return { nodes, edges };
}