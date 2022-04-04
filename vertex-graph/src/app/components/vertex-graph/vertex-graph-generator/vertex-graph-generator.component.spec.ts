import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexGraphGeneratorComponent } from './vertex-graph-generator.component';

describe('VertexGraphGeneratorComponent', () => {
  let component: VertexGraphGeneratorComponent;
  let fixture: ComponentFixture<VertexGraphGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertexGraphGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertexGraphGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
