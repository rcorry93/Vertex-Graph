import { Node, Edge } from '@swimlane/ngx-graph';


export class GraphModel {
  edges: Edge[];
  vertices: Node[];

  constructor(edges: Edge[], vertices: Node[]) {
    this.edges = edges;
    this.vertices = vertices;
  }
}
