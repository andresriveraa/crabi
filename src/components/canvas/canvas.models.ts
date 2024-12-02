export interface GraphEdge {
  from: string;
  to: string;
  cost: number;
}

// Definir interfaces para Node y Edge
export interface CanvasContext extends CanvasRenderingContext2D {}


export interface GraphCanvasProps {
  neighborgs: string[];
  onClickNode: (a: string) => void;
  actualNode: string | undefined;
}