import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MysqlConnectionComponent } from './mysql-connection.component';

const routes: Routes = [{ path: '', component: MysqlConnectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MysqlConnectionRoutingModule { }
