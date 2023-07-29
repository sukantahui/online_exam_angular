import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTuplesRoutingModule } from './python-tuples-routing.module';
import { PythonTuplesComponent } from './python-tuples.component';


@NgModule({
  declarations: [
    PythonTuplesComponent
  ],
  imports: [
    CommonModule,
    PythonTuplesRoutingModule,
  ]
})
export class PythonTuplesModule { }
