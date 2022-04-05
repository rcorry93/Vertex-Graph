import { EdgeModel } from "./edge";
import { VertexModel } from "./vertex";

export class GraphModel {
  edges?: EdgeModel[];
  vertices?: VertexModel[];

  constructor(edges: EdgeModel[], vertices: VertexModel[]) {
    this.edges = edges;
    this.vertices = vertices;
  }
}
