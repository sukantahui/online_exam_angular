import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStructureIntroductionRoutingModule } from './data-structure-introduction-routing.module';
import { DataStructureIntroductionComponent } from './data-structure-introduction.component';


@NgModule({
  declarations: [
    DataStructureIntroductionComponent
  ],
  imports: [
    CommonModule,
    DataStructureIntroductionRoutingModule
  ]
})
export class DataStructureIntroductionModule { }
