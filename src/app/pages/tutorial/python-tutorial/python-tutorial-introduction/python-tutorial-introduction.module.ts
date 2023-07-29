import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTutorialIntroductionRoutingModule } from './python-tutorial-introduction-routing.module';
import { PythonTutorialIntroductionComponent } from './python-tutorial-introduction.component';


@NgModule({
  declarations: [
    PythonTutorialIntroductionComponent
  ],
  imports: [
    CommonModule,
    PythonTutorialIntroductionRoutingModule
  ]
})
export class PythonTutorialIntroductionModule { }
