import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BijoyaRegistrationListRoutingModule } from './bijoya-registration-list-routing.module';
import { BijoyaRegistrationListComponent } from './bijoya-registration-list.component';


@NgModule({
  declarations: [
    BijoyaRegistrationListComponent
  ],
  imports: [
    CommonModule,
    BijoyaRegistrationListRoutingModule
  ]
})
export class BijoyaRegistrationListModule { }
