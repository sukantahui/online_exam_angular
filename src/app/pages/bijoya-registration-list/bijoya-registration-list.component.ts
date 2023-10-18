import { Component } from '@angular/core';
import { BijoyaRegistrationService } from 'src/app/services/bijoya-registration.service';

@Component({
  selector: 'app-bijoya-registration-list',
  templateUrl: './bijoya-registration-list.component.html',
  styleUrls: ['./bijoya-registration-list.component.scss']
})
export class BijoyaRegistrationListComponent {
  studentList : any;

  constructor( private bijoyaRegistrationService: BijoyaRegistrationService) {
    this.bijoyaRegistrationService.fetchAllStudentInfo().subscribe(response => {
      this.studentList = response.data;
      console.log(this.studentList);
    });
  }

  

}
