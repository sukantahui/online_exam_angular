import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataStructureTutorialComponent } from './data-structure-tutorial.component';

const routes: Routes = [{ path: '', component: DataStructureTutorialComponent,
  children: [
    { path: '', loadChildren: () => import('./data-structure-introduction/data-structure-introduction.module').then(m => m.DataStructureIntroductionModule) },
    { path: 'BinaryTree', loadChildren: () => import('./binary-tree-tutorial/binary-tree-tutorial.module').then(m => m.BinaryTreeTutorialModule) },
    { path: 'GraphTutorial', loadChildren: () => import('./graph-tutorial/graph-tutorial.module').then(m => m.GraphTutorialModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataStructureTutorialRoutingModule { }
