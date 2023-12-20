import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-happy-birthday',
  templateUrl: './happy-birthday.component.html',
  styleUrls: ['./happy-birthday.component.scss']
})
export class HappyBirthdayComponent {
  constructor(public commonService: CommonService){
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }

}
