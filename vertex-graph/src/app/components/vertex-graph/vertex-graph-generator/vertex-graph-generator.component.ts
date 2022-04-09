import { Component, Input, OnChanges } from '@angular/core';
import { GraphModel } from 'src/app/models/graph';
import { Node, Edge } from '@swimlane/ngx-graph';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-vertex-graph-generator',
  templateUrl: './vertex-graph-generator.component.html',
  styleUrls: ['./vertex-graph-generator.component.scss'],
})
export class VertexGraphGeneratorComponent implements OnChanges {
  @Input() graph: GraphModel = new GraphModel([], []);

  edges: Edge[] = new Array<Edge>();
  vertices: Node[] = new Array<Node>();
  update$: Subject<boolean> = new Subject();
  center$ = new Subject<boolean>();

  ngOnChanges(): void {
    this.updateGraph(this.graph);
  }

  updateGraph(graph: GraphModel) {
    this.graph = graph;
    this.edges =this.graph.edges;
    this.vertices = this.graph.vertices
    this.update$.next(true);
    this.center$.next(true);
  }
}
