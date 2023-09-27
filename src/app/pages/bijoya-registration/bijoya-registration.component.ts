import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-bijoya-registration',
  templateUrl: './bijoya-registration.component.html',
  styleUrls: ['./bijoya-registration.component.scss']
})
export class BijoyaRegistrationComponent {

  studentForm = new FormGroup({
    studentName: new FormControl(''),
    contactNumber: new FormControl(''),
    whatsappNumber: new FormControl(''),
    email: new FormControl(''),
    memberNumber: new FormControl(''),
  });

  constructor(public commonService: CommonService){
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }
  onSubmit(){
    console.log(this.studentForm.value);
  }

}
