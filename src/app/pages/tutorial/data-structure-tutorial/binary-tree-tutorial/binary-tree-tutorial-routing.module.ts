import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinaryTreeTutorialComponent } from './binary-tree-tutorial.component';

const routes: Routes = [{ path: '', component: BinaryTreeTutorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BinaryTreeTutorialRoutingModule { }
