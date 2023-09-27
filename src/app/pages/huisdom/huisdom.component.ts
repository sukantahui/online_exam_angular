import { Component } from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-huisdom',
  templateUrl: './huisdom.component.html',
  styleUrls: ['./huisdom.component.scss']
})
export class HuisdomComponent {
  constructor(public commonService: CommonService){
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }
}
