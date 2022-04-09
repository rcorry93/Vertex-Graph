import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MaterialModule } from 'src/app/modules/material.module';
import { mockGraph } from 'src/assets/mockdata';
import { JsonInputComponent } from '../../json-input/json-input/json-input.component';
import { VertexGraphGeneratorComponent } from '../../vertex-graph-generator/vertex-graph-generator.component';

import { VertexGraphContainerComponent } from './vertex-graph-container.component';

describe('VertexGraphContainerComponent', () => {
  let component: VertexGraphContainerComponent;
  let fixture: ComponentFixture<VertexGraphContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        VertexGraphContainerComponent,
        JsonInputComponent,
        VertexGraphGeneratorComponent,
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule,
        NgxGraphModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertexGraphContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the graph correctly', () => {
    expect(component.generatedGraph.vertices.length).toEqual(0);
    component.updateGraph(mockGraph);
    expect(component.generatedGraph.vertices.length).toEqual(1);
  });
});
