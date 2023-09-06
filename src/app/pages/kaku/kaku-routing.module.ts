import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KakuComponent } from './kaku.component';

const routes: Routes = [{ path: '', component: KakuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KakuRoutingModule { }
