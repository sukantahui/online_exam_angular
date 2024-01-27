import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamEntryComponent } from './exam-entry.component';

describe('ExamEntryComponent', () => {
  let component: ExamEntryComponent;
  let fixture: ComponentFixture<ExamEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
