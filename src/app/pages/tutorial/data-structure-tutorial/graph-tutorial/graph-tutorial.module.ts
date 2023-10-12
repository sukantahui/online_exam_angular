import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphTutorialRoutingModule } from './graph-tutorial-routing.module';
import { GraphTutorialComponent } from './graph-tutorial.component';


@NgModule({
  declarations: [
    GraphTutorialComponent
  ],
  imports: [
    CommonModule,
    GraphTutorialRoutingModule
  ]
})
export class GraphTutorialModule { }
