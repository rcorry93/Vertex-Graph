import { Component, OnInit } from '@angular/core';
import { EdgeModel } from 'src/app/models/edge';
import { GraphModel } from 'src/app/models/graph';
import { VertexModel } from 'src/app/models/vertex';

@Component({
  selector: 'app-vertex-graph-container',
  templateUrl: './vertex-graph-container.component.html',
  styleUrls: ['./vertex-graph-container.component.scss']
})
export class VertexGraphContainerComponent implements OnInit {

  generatedGraph: GraphModel = new GraphModel([], []);

  constructor() { }

  ngOnInit(): void {
  }

  updateGraph(graph: GraphModel) {
    console.log("updateGraphContainer");
    this.generatedGraph = graph;
  }

}
