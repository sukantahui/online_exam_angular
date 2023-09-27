import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HuisdomRoutingModule } from './huisdom-routing.module';
import { HuisdomComponent } from './huisdom.component';


@NgModule({
  declarations: [
    HuisdomComponent
  ],
  imports: [
    CommonModule,
    HuisdomRoutingModule
  ]
})
export class HuisdomModule { }
