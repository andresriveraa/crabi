import { Graph } from "../../globalTypes";

export interface INodeGraph {
  neighborgs: Graph["edges"] | undefined;
  onClickNode: (l: string) => void;
  actualNode: string | undefined;
}
