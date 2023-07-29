import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonTuplesComponent } from './python-tuples.component';

const routes: Routes = [{ path: '', component: PythonTuplesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonTuplesRoutingModule { }
