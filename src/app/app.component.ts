import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'coder_tutorial';
  subject = "Main";
  showSideBar=true;

  sideBarOpen=true;
  mainAreaOpen=false;
  screenWidth: number = 0;
  screenHeight: number = 0;


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;


    setTimeout(() => {
      this.sideBarOpen=false;
      this.mainAreaOpen=true;
    }, 2000);
  }}
