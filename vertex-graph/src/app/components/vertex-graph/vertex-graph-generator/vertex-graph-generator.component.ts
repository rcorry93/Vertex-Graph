import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { GraphModel } from 'src/app/models/graph';
import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vertex-graph-generator',
  templateUrl: './vertex-graph-generator.component.html',
  styleUrls: ['./vertex-graph-generator.component.scss'],
})
export class VertexGraphGeneratorComponent implements OnInit {
  @Input() graph: GraphModel = new GraphModel([], []);

  edges: Edge[] = new Array<Edge>();
  vertices: Node[] = new Array<Node>();
  update$: Subject<boolean> = new Subject();
  center$ = new Subject<any>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.updateGraph(this.graph);
  }

  updateGraph(graph: GraphModel) {
    this.graph = graph;
    this.convertTypes(graph);
    this.update$.next(true);
    this.center$.next(true);
  }

  convertTypes(graph: GraphModel) {
    if (graph.edges != null) {
      this.edges = graph.edges.map(edge => {
        return {
          id: edge.id,
          source: edge.source_id,
          target: edge.target_id,
          label: edge.label,
        };
      }) as Edge[];
    }
    if (graph.vertices != null) {
      this.vertices = graph.vertices.map(vertex => {
        return {
          id: vertex.id,
          label: vertex.label,
        };
      }) as Node[];
    }
  }
}
