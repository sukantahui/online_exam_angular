import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonTutorialIntroductionComponent } from './python-tutorial-introduction.component';

const routes: Routes = [{ path: '', component: PythonTutorialIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonTutorialIntroductionRoutingModule { }
