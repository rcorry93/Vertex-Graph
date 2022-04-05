import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertexGraphContainerComponent } from './vertex-graph-container.component';

describe('VertexGraphContainerComponent', () => {
  let component: VertexGraphContainerComponent;
  let fixture: ComponentFixture<VertexGraphContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertexGraphContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertexGraphContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
