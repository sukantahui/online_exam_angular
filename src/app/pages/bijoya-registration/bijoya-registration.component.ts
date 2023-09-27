import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BijoyaRegistrationService } from 'src/app/services/bijoya-registration.service';
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

  constructor(public commonService: CommonService, private bijoyaRegistrationService: BijoyaRegistrationService,){
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }
  onSubmit(){
    console.log(this.studentForm.value);
    this.bijoyaRegistrationService.saveStudentdetails(this.studentForm.value).subscribe(response => {
      
    });
  }

}
