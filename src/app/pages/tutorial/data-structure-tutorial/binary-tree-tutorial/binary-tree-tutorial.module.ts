import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinaryTreeTutorialRoutingModule } from './binary-tree-tutorial-routing.module';
import { BinaryTreeTutorialComponent } from './binary-tree-tutorial.component';


@NgModule({
  declarations: [
    BinaryTreeTutorialComponent
  ],
  imports: [
    CommonModule,
    BinaryTreeTutorialRoutingModule
  ]
})
export class BinaryTreeTutorialModule { }
