import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonTutorialComponent } from './python-tutorial.component';
import {PythonTutorialIntroductionComponent} from "./python-tutorial-introduction/python-tutorial-introduction.component";

const routes: Routes = [{ path: '', component: PythonTutorialComponent,
  children: [
    // {path: '', component: PythonTutorialIntroductionComponent},
    { path: '', loadChildren: () => import('./python-tutorial-introduction/python-tutorial-introduction.module').then(m => m.PythonTutorialIntroductionModule) },
    { path: 'PythonTutorialList', loadChildren: () => import('./python-tutorial-list/python-tutorial-list.module').then(m => m.PythonTutorialListModule) },
    // {path: 'dataType', component: PythonDataTypeComponent},
    // {path: 'pythonNumber', component: PythonNumberComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonTutorialRoutingModule { }
