import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonService } from 'src/app/services/common.service';
=======
import {CommonService} from "../../services/common.service";
>>>>>>> 56c3285c8dee218b18cbee9a2f42e8c73fd850b7

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
<<<<<<< HEAD

=======
>>>>>>> 56c3285c8dee218b18cbee9a2f42e8c73fd850b7
}
