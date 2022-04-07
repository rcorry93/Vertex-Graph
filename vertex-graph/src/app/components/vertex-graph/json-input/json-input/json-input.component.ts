import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GraphModel } from 'src/app/models/graph';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss'],
})
export class JsonInputComponent implements OnInit {
  graphModel: GraphModel = new GraphModel([], []);
  jsonTextValue: string = '';

  @Output() onGraphUpdated = new EventEmitter<GraphModel>();
  @Output() onInvalidJsonFile = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

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
      this.readJsonandCreateGraph(this.jsonTextValue);
    }
  }

  readJsonandCreateGraph(jsonFile: any) {
    if (this.IsJsonString(jsonFile)) {
      const json = JSON.parse(jsonFile);
      this.graphModel = new GraphModel(json.edges, json.vertices);
      this.jsonTextValue = JSON.stringify(json, undefined, 2);
      this.onGraphUpdated.emit(this.graphModel);
    } else {
      this.onInvalidJsonFile.emit();
    }
  }

  IsJsonString(str: string) {
    try {
      var json = JSON.parse(str);
      return typeof json === 'object';
    } catch (e) {
      return false;
    }
  }
}
