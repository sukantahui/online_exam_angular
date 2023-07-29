import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTutorialRoutingModule } from './python-tutorial-routing.module';
import { PythonTutorialComponent } from './python-tutorial.component';

import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    PythonTutorialComponent
  ],
  imports: [
    CommonModule,
    PythonTutorialRoutingModule,
    MatTabsModule,
  ]
})
export class PythonTutorialModule { }
