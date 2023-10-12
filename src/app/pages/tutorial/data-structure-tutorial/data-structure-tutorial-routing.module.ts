import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructureTutorialComponent } from './data-structure-tutorial.component';

const routes: Routes = [{ path: '', component: DataStructureTutorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStructureTutorialRoutingModule { }
