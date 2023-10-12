import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataStructureTutorialRoutingModule } from './data-structure-tutorial-routing.module';
import { DataStructureTutorialComponent } from './data-structure-tutorial.component';


@NgModule({
  declarations: [
    DataStructureTutorialComponent
  ],
  imports: [
    CommonModule,
    DataStructureTutorialRoutingModule
  ]
})
export class DataStructureTutorialModule { }
