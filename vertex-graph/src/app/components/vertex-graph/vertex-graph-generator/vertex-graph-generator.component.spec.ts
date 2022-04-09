import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { MaterialModule } from 'src/app/modules/material.module';
import { mockGraph } from 'src/assets/mockdata';

import { VertexGraphGeneratorComponent } from './vertex-graph-generator.component';

describe('VertexGraphGeneratorComponent', () => {
  let component: VertexGraphGeneratorComponent;
  let fixture: ComponentFixture<VertexGraphGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VertexGraphGeneratorComponent],
      imports: [
        NoopAnimationsModule,
        NgxGraphModule,
        FormsModule,
        MaterialModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertexGraphGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('update chart to be called when new graph is added', () => {
    const updateSpy = spyOn(component, 'updateGraph');
    expect(updateSpy).toHaveBeenCalledTimes(0);
    component.graph = mockGraph;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(updateSpy).toHaveBeenCalledTimes(1);
  });
});
