import { Component, ElementRef, Renderer2 } from '@angular/core';
import {CommonService} from "../../services/common.service";
@Component({
  selector: 'app-happy-birthday',
  templateUrl: './happy-birthday.component.html',
  styleUrls: ['./happy-birthday.component.scss'],
})
export class HappyBirthdayComponent{
  imgsrc = "/assets/images/candleon.png";
  candleon = true;
  constructor(public commonService: CommonService){
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }

  changeImage() {

    if (this.candleon ==true) {
      this.imgsrc = "/assets/images/candleoff.png";
      this.candleon = false;
    } else {
      this.imgsrc = "/assets/images/candleon.png";
      this.candleon = true;
    }
  }
}
