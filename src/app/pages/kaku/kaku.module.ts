import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KakuRoutingModule } from './kaku-routing.module';
import { KakuComponent } from './kaku.component';


@NgModule({
  declarations: [
    KakuComponent
  ],
  imports: [
    CommonModule,
    KakuRoutingModule
  ]
})
export class KakuModule { }
