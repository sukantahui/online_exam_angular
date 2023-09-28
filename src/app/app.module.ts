import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PythonHomeComponent } from './pages/python-home/python-home.component';
import { PythonIntroductionComponent } from './pages/python-home/python-introduction/python-introduction.component';
import { PythonDataTypeComponent } from './pages/python-home/python-data-type/python-data-type.component';
import { PythonNumberComponent } from './pages/python-home/python-number/python-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HeaderModule} from "./header/header.module";
import {NgxHideOnScrollModule} from "ngx-hide-on-scroll";
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    PythonHomeComponent,
    PythonIntroductionComponent,
    PythonDataTypeComponent,
    PythonNumberComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        HeaderModule,
        NgxHideOnScrollModule,
        IvyCarouselModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
