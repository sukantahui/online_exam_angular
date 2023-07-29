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


  ngOnInit(): void {

    
    setTimeout(() => {
      this.sideBarOpen=false;
    }, 3000);
  }}
