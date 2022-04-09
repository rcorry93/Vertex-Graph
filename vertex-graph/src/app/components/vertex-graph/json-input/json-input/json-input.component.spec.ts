import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphModel } from 'src/app/models/graph';
import * as mockdata from '../../../../../assets/mockdata';
import { JsonInputComponent } from './json-input.component';

describe('JsonInputComponent', () => {
  let component: JsonInputComponent;
  let fixture: ComponentFixture<JsonInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'readJsonandCreateGraph').and.callThrough();
    spyOn(component.onGraphUpdated, 'emit');
    spyOn(component.onInvalidJsonFile, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not call readJsonandCreateGraph if textarea is changed to empty', () => {
    component.jsonTextValue = mockdata.mockIncorrectJson;
    component.onTextAreaChange();
    expect(component.readJsonandCreateGraph).toHaveBeenCalledTimes(1);
    component.jsonTextValue = '';
    component.onTextAreaChange();
    expect(component.readJsonandCreateGraph).toHaveBeenCalledTimes(1);
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
    expect(component.IsJsonString(jsonFile)).toBeFalsy();
  });

  it('should return true if string is in json Format', () => {
    const jsonFile = mockdata.mockCorrectJson;
    expect(component.IsJsonString(jsonFile)).toBeTrue();
  });

  it('should create graph and emit GraphUpdated if correct json file is added', () => {
    component.graphModel = new GraphModel([], []);
    component.readJsonandCreateGraph(mockdata.mockCorrectJson);
    expect(component.graphModel.edges?.length).toBe(3);
    expect(component.onGraphUpdated.emit).toHaveBeenCalled();
  });

  it('should not create graph and emit GraphUpdated if incorrect json file is added', () => {
    component.graphModel = new GraphModel([], []);
    component.readJsonandCreateGraph(mockdata.mockIncorrectJson);
    expect(component.graphModel.edges?.length).toBe(0);
    expect(component.onGraphUpdated.emit).not.toHaveBeenCalled();
  });
});
