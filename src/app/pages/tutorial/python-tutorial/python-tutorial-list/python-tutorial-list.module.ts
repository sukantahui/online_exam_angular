import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTutorialListRoutingModule } from './python-tutorial-list-routing.module';
import { PythonTutorialListComponent } from './python-tutorial-list.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    PythonTutorialListComponent
  ],
  imports: [
    CommonModule,
    PythonTutorialListRoutingModule,
    MatTabsModule,
  ]
})
export class PythonTutorialListModule { }
