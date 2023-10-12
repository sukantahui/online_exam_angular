import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructureIntroductionComponent } from './data-structure-introduction.component';

const routes: Routes = [{ path: '', component: DataStructureIntroductionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStructureIntroductionRoutingModule { }
