import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuisdomComponent } from './huisdom.component';

const routes: Routes = [{ path: '', component: HuisdomComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HuisdomRoutingModule { }
