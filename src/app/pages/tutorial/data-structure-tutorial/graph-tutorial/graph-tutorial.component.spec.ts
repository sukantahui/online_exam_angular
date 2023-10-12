import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTutorialComponent } from './graph-tutorial.component';

describe('GraphTutorialComponent', () => {
  let component: GraphTutorialComponent;
  let fixture: ComponentFixture<GraphTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
