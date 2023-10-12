import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { ErrorService } from './error.service';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BijoyaRegistrationService {

  constructor(private http: HttpClient, private commonService: CommonService,  private errorService: ErrorService ) { }

  saveStudentdetails(studentdata: any ){
   return this.http.post<any>(this.commonService.getAPI() + '/dev/bijoyaRegistrationForm', studentdata)
   .pipe(catchError(this.errorService.serverError), tap(response =>{
      
   }))
  }

  fetchAllStudentInfo(){
    return this.http.get<any>(this.commonService.getAPI() + '/dev/bijoyaRegistrationForm')
    .pipe(catchError(this.errorService.serverError),tap(response =>{
      // this.studentInfo = response.data;
    }));
  }
}
