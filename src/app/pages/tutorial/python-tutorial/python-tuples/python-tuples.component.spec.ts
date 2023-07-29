import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonTuplesComponent } from './python-tuples.component';

describe('PythonTuplesComponent', () => {
  let component: PythonTuplesComponent;
  let fixture: ComponentFixture<PythonTuplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonTuplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonTuplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
