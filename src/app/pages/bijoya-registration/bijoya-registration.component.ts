import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BijoyaRegistrationService } from 'src/app/services/bijoya-registration.service';
import { CommonService } from 'src/app/services/common.service';
import Swal from 'sweetalert2';

// enum CheckBoxType { VEG, NONVEG, SEMI, NONE };


// import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-bijoya-registration',
  templateUrl: './bijoya-registration.component.html',
  styleUrls: ['./bijoya-registration.component.scss']
})
export class BijoyaRegistrationComponent {

  
 

  bijoyaFormShow= true;  
  saveStudentInfo: any;

  // food_habit = CheckBoxType;

  // currentlyChecked: CheckBoxType | undefined;

  food = ["veg", "non-veg", "semi"];

  studentForm = new FormGroup({
    studentName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    contactNumber: new FormControl(null, [Validators.required]),
    whatsappNumber: new FormControl(null),
    email: new FormControl(null),
    memberNumber: new FormControl(1, [Validators.required]),
    foodHabit: new FormControl(null, [Validators.required]),
  });

  msgs: { severity: string; summary: string; detail: string }[] = [];

  constructor(public commonService: CommonService, private bijoyaRegistrationService: BijoyaRegistrationService,
    //  private confirmationService: ConfirmationService,
    // private messageService: MessageService
    ) {
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }
  onSubmit() {
    console.log(this.studentForm.value);
    // this.confirmationService.confirm({
    //   message: 'Do you want to Register?',
    //   header: 'I am Coming',
    //   icon: 'pi pi-info-circle',

    //   accept: () => {},
    //   reject: () => {

    //     this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
    //   }

    // });

    Swal.fire({
      title: 'Do you want to Register?',
      text: ' ...Yes I am comming...',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Save it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if(result.isConfirmed){
        this.bijoyaRegistrationService.saveStudentdetails(this.studentForm.value).subscribe(response =>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'successfully registered',
            // showConfirmButton: false,
            timer: 1000
          });
          this.studentForm.reset();
          this.bijoyaFormShow=false;
          this.saveStudentInfo=response.data;
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    });

    
  }
  
  selectCheckBox() {
    // If the checkbox was already checked, clear the currentlyChecked variable

    // if(this.currentlyChecked === targetType) {
    //   this.currentlyChecked = CheckBoxType.NONE;
    //   return;
    // }

    // this.currentlyChecked = targetType;
    console.log(this.studentForm.value);
  }

  // showSuccess(successMessage: string) {
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: successMessage });
  // }
  // showError(message: string) {
  //   this.messageService.add({ severity: 'error', summary: 'Success', detail: message });
  // }

}
