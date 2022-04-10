import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GraphModel } from 'src/app/models/graph';
import { MaterialModule } from 'src/app/modules/material.module';
import * as mockdata from '../../../../../assets/mockdata';
import { JsonInputComponent } from './json-input.component';

describe('JsonInputComponent', () => {
  let component: JsonInputComponent;
  let fixture: ComponentFixture<JsonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonInputComponent],
      imports: [MaterialModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'readJsonandCreateGraph').and.callThrough();
    spyOn(component.GraphUpdated, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call readJsonandCreateGraph with empty string if textarea is changed to empty or incorrect data', () => {
    component.jsonTextValue = mockdata.mockIncorrectJson;
    component.onTextAreaChange();
    expect(component.readJsonandCreateGraph).toHaveBeenCalledWith(
      mockdata.mockIncorrectJson
    );
    component.jsonTextValue = '';
    component.onTextAreaChange();
    expect(component.readJsonandCreateGraph).toHaveBeenCalledWith('');
  });

  it('should call filereader when file is input', () => {
    const mockFile = new File([''], 'filename', { type: 'application/JSON' });
    const mockEvt = { target: { files: [mockFile] } };
    const mockReader: FileReader = jasmine.createSpyObj('FileReader', [
      'readAsText',
      'onload',
    ]);
    spyOn(window as any, 'FileReader').and.returnValue(mockReader);
    component.onJsonFileAdded(mockEvt as any);
    expect((window as any).FileReader).toHaveBeenCalled();
    expect(mockReader.readAsText).toHaveBeenCalledWith(mockFile);
  });

  it('should return false if string isnt in json Format', () => {
    const jsonFile = mockdata.mockIncorrectJson;
    expect(component.isJsonString(jsonFile)).toBeFalsy();
  });

  it('should return true if string is in json Format', () => {
    const jsonFile = mockdata.mockCorrectJson;
    expect(component.isJsonString(jsonFile)).toBeTrue();
  });

  it('should create graph and emit GraphUpdated if correct json file is added', () => {
    component.graphModel = new GraphModel([], []);
    component.readJsonandCreateGraph(mockdata.mockCorrectJson);
    expect(component.graphModel.edges?.length).toBe(3);
    expect(component.GraphUpdated.emit).toHaveBeenCalled();
  });

  it('should emit empty graph when incorrect json data has been processed', () => {
    component.graphModel = new GraphModel([], []);
    component.readJsonandCreateGraph(mockdata.mockIncorrectJson);
    expect(component.graphModel.edges?.length).toBe(0);
    expect(component.GraphUpdated.emit).toHaveBeenCalledOnceWith(
      new GraphModel([], [])
    );
  });

  it('should create an Edge object after passing correct json in', () => {
    const json = JSON.parse(mockdata.mockEdgesJson);
    const edgeObject = component.convertJsonEdgeToEdge(json.edges);
    expect(edgeObject.length).toBe(3);
    expect(edgeObject[0].id).toBe('e1');
    expect(edgeObject[0].label).toBe('edge n1-n2');
    expect(edgeObject[0].source).toBe('n1');
    expect(edgeObject[0].target).toBe('n2');
  });

  it('should create a Node object after passing correct json in', () => {
    const json = JSON.parse(mockdata.mockVerticesJson);
    const nodeObject = component.convertJsonVerticeToNode(json.vertices);
    expect(nodeObject.length).toBe(4);
    expect(nodeObject[0].id).toBe('n1');
    expect(nodeObject[0].label).toBe('Node 1');
  });
});
