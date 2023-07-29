import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonTutorialListComponent } from './python-tutorial-list.component';

const routes: Routes = [{ path: '', component: PythonTutorialListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonTutorialListRoutingModule { }
