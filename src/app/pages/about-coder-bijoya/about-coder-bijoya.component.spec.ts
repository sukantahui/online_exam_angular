import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoderBijoyaComponent } from './about-coder-bijoya.component';

describe('AboutCoderBijoyaComponent', () => {
  let component: AboutCoderBijoyaComponent;
  let fixture: ComponentFixture<AboutCoderBijoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCoderBijoyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCoderBijoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
