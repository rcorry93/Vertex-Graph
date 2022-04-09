import { Component } from '@angular/core';
import { GraphModel } from 'src/app/models/graph';

@Component({
  selector: 'app-vertex-graph-container',
  templateUrl: './vertex-graph-container.component.html',
  styleUrls: ['./vertex-graph-container.component.scss'],
})
export class VertexGraphContainerComponent {
  generatedGraph: GraphModel = new GraphModel([], []);

  updateGraph(graph: GraphModel) {
    this.generatedGraph = graph;
  }

  openSnackBar() {
    alert('InvalidJson');
  }
}
