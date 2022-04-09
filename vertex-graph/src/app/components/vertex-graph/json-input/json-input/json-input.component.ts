import { Component, EventEmitter, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { GraphModel } from 'src/app/models/graph';
import * as mockdata from '../../../../../assets/mockdata';
import { Node, Edge } from '@swimlane/ngx-graph';


@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss'],
})
export class JsonInputComponent {
  graphModel: GraphModel = new GraphModel([], []);
  jsonTextValue = '';
  selectedRadioOption = 'Custom';
  radioOptions: string[] = ['Custom', 'Example'];
  isInvalidJson = false;


  @Output() GraphUpdated = new EventEmitter<GraphModel>();
  @Output() InvalidJsonFile = new EventEmitter();



  onJsonFileAdded(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.readJsonandCreateGraph(fileReader.result as string);
    };
    fileReader.readAsText(input.files[0]);
  }

  onTextAreaChange() {
    if (this.jsonTextValue != '') {
      this.selectedRadioOption = 'Custom';
      this.readJsonandCreateGraph(this.jsonTextValue);
    }
  }

  onRadioChange(event: MatRadioChange) {
    if (event.value === 'Example') {
      this.readJsonandCreateGraph(mockdata.mockCorrectJson);
    }
  }

  readJsonandCreateGraph(jsonFile: string) {
    if (this.IsJsonString(jsonFile)) {
      const json = JSON.parse(jsonFile);
      this.graphModel = new GraphModel(
        this.convertJsonEdgetoEdge(json.edges), this.convertJsonVerticetoNode(json.vertices));
      this.jsonTextValue = JSON.stringify(json, undefined, 2);
      this.GraphUpdated.emit(this.graphModel);
    } else {
      this.isInvalidJson = true;
      console.log(this.isInvalidJson);
      this.InvalidJsonFile.emit();
    }
  }

  IsJsonString(str: string) {
    try {
      const json = JSON.parse(str);
      this.isInvalidJson = false;
      console.log(this.isInvalidJson);
      return typeof json === 'object';
    } catch (e) {
      return false;
    }
  }

  convertJsonEdgetoEdge(jsonEdge: any): Edge[] {
    const edges: Edge[] = [];
    jsonEdge.forEach((edge: any) => {
      edges.push({
        id: edge.id,
        label: edge.label,
        data: {type: edge.type},
        source: edge.source_id,
        target: edge.target_id,
      });
    });

    return edges;
  }

  convertJsonVerticetoNode(jsonEdge: any): Node[] {
    const nodes: Node[] = [];
    jsonEdge.forEach((node: any) => {
      nodes.push({
        id: node.id,
        label: node.label,
        data: {type: node.type}
      });
    });
    return nodes;
  }
}
