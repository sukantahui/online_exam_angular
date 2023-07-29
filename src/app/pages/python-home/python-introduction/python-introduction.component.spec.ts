import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonIntroductionComponent } from './python-introduction.component';

describe('PythonIntroductionComponent', () => {
  let component: PythonIntroductionComponent;
  let fixture: ComponentFixture<PythonIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
