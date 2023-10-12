import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphTutorialComponent } from './graph-tutorial.component';

const routes: Routes = [{ path: '', component: GraphTutorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphTutorialRoutingModule { }
