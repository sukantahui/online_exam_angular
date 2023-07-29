import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTutorialIntroductionComponent } from './python-tutorial-introduction.component';

describe('PythonTutorialIntroductionComponent', () => {
  let component: PythonTutorialIntroductionComponent;
  let fixture: ComponentFixture<PythonTutorialIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonTutorialIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonTutorialIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
