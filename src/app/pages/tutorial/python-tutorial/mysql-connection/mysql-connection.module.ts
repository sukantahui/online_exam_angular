import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MysqlConnectionRoutingModule } from './mysql-connection-routing.module';
import { MysqlConnectionComponent } from './mysql-connection.component';


@NgModule({
  declarations: [
    MysqlConnectionComponent
  ],
  imports: [
    CommonModule,
    MysqlConnectionRoutingModule
  ]
})
export class MysqlConnectionModule { }
