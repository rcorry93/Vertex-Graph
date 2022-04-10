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
    input.value = '';
  }

  onTextAreaChange() {
    if (this.jsonTextValue != '') {
      this.selectedRadioOption = 'Custom';
      this.readJsonandCreateGraph(this.jsonTextValue);
    } else {
      this.readJsonandCreateGraph('');
      this.jsonTextValue == ''
        ? (this.isInvalidJson = false)
        : (this.isInvalidJson = true);
    }
  }

  onRadioChange(event: MatRadioChange) {
    if (event.value === 'Example') {
      this.readJsonandCreateGraph(mockdata.mockCorrectJson);
    }
  }

  readJsonandCreateGraph(jsonFile: string) {
    this.jsonTextValue = jsonFile;
    if (this.isJsonString(jsonFile)) {
      const json = JSON.parse(jsonFile);
      this.graphModel = new GraphModel(
        this.convertJsonEdgeToEdge(json.edges),
        this.convertJsonVerticeToNode(json.vertices)
      );
      this.GraphUpdated.emit(this.graphModel);
    } else {
      jsonFile == ''
        ? (this.isInvalidJson = false)
        : (this.isInvalidJson = true);
      this.GraphUpdated.emit(new GraphModel([], []));
    }
  }

  isJsonString(str: string) {
    try {
      const json = JSON.parse(str);
      this.isInvalidJson = false;
      return typeof json === 'object';
    } catch (e) {
      return false;
    }
  }

  convertJsonEdgeToEdge(jsonEdge: any): Edge[] {
    const edges: Edge[] = [];
    jsonEdge.forEach((edge: any) => {
      edges.push({
        id: edge.id,
        label: edge.label,
        data: {
          type: edge.type,
          customColor: edge.color,
        },
        source: edge.source_id,
        target: edge.target_id,
      });
    });

    return edges;
  }

  convertJsonVerticeToNode(jsonEdge: any): Node[] {
    const nodes: Node[] = [];
    jsonEdge.forEach((node: any) => {
      nodes.push({
        id: node.id,
        label: node.label,
        data: {
          type: node.type,
          customColor: node.color,
        },
      });
    });
    return nodes;
  }
}
