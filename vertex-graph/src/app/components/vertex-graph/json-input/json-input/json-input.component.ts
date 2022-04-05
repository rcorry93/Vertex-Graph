import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GraphModel } from 'src/app/models/graph';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnInit {

  hasFile = false;
  graphModel: GraphModel = new GraphModel([], []);

  @Output() onJsonFileFound = new EventEmitter<GraphModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(event : Event){
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      this.hasFile = false;
        return;
    }
    this.hasFile = true;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      console.log("inside filereader")
      const json = JSON.parse(fileReader.result as string);
      this.graphModel = new GraphModel(json.edges, json.vertices);
      console.log("About to emit")
      this.onJsonFileFound.emit(this.graphModel);
    };
    fileReader.readAsText(input.files[0]);
  }
}
