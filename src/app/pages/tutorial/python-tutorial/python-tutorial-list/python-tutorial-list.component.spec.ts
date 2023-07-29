import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTutorialListComponent } from './python-tutorial-list.component';

describe('PythonTutorialListComponent', () => {
  let component: PythonTutorialListComponent;
  let fixture: ComponentFixture<PythonTutorialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonTutorialListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonTutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
