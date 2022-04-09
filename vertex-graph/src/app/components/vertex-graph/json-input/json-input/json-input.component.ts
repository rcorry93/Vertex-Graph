import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { GraphModel } from 'src/app/models/graph';
import * as mockdata from '../../../../../assets/mockdata';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss'],
})
export class JsonInputComponent {
  graphModel: GraphModel = new GraphModel([], []);
  jsonTextValue: string = '';
  selectedRadioOption: string = 'Custom';
  radioOptions: string[] = ['Custom', 'Example'];
  isInvalidJson: boolean = false;


  @Output() onGraphUpdated = new EventEmitter<GraphModel>();
  @Output() onInvalidJsonFile = new EventEmitter();

  constructor() {}


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

  readJsonandCreateGraph(jsonFile: any) {
    if (this.IsJsonString(jsonFile)) {
      const json = JSON.parse(jsonFile);
      this.graphModel = new GraphModel(json.edges, json.vertices);
      this.jsonTextValue = JSON.stringify(json, undefined, 2);
      this.onGraphUpdated.emit(this.graphModel);
    } else {
      this.isInvalidJson = true;
      console.log(this.isInvalidJson);
      this.onInvalidJsonFile.emit();
    }
  }

  IsJsonString(str: string) {
    try {
      var json = JSON.parse(str);
      this.isInvalidJson = false;
      console.log(this.isInvalidJson);
      return typeof json === 'object';
    } catch (e) {
      return false;
    }
  }
}
