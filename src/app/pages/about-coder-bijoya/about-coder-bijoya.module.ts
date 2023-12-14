import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCoderBijoyaRoutingModule } from './about-coder-bijoya-routing.module';
import { AboutCoderBijoyaComponent } from './about-coder-bijoya.component';


@NgModule({
  declarations: [
    AboutCoderBijoyaComponent
  ],
  imports: [
    CommonModule,
    AboutCoderBijoyaRoutingModule
  ]
})
export class AboutCoderBijoyaModule { }
