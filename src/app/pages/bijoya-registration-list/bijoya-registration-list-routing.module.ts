import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BijoyaRegistrationListComponent } from './bijoya-registration-list.component';

const routes: Routes = [{ path: '', component: BijoyaRegistrationListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BijoyaRegistrationListRoutingModule { }
