import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamEntryRoutingModule } from './exam-entry-routing.module';
import { ExamEntryComponent } from './exam-entry.component';


@NgModule({
  declarations: [
    ExamEntryComponent
  ],
  imports: [
    CommonModule,
    ExamEntryRoutingModule
  ]
})
export class ExamEntryModule { }
