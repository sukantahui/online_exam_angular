import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BijoyaRegistrationListComponent } from './bijoya-registration-list.component';

describe('BijoyaRegistrationListComponent', () => {
  let component: BijoyaRegistrationListComponent;
  let fixture: ComponentFixture<BijoyaRegistrationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BijoyaRegistrationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BijoyaRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
