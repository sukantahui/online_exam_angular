import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonDataTypeComponent } from './python-data-type.component';

describe('PythonDataTypeComponent', () => {
  let component: PythonDataTypeComponent;
  let fixture: ComponentFixture<PythonDataTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonDataTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonDataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
