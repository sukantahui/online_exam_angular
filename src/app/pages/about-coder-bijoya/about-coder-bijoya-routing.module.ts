import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCoderBijoyaComponent } from './about-coder-bijoya.component';

const routes: Routes = [{ path: '', component: AboutCoderBijoyaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutCoderBijoyaRoutingModule { }
