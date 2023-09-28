import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BijoyaRegistrationRoutingModule } from './bijoya-registration-routing.module';
import { BijoyaRegistrationComponent } from './bijoya-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BijoyaRegistrationComponent
  ],
  imports: [
    CommonModule,
    BijoyaRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule
  ]
})
export class BijoyaRegistrationModule { }
