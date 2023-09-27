import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class BijoyaRegistrationService {

  constructor(private http: HttpClient, private commonService: CommonService,  private errorService: ErrorService ) { }

  saveStudentdetails(studentdata: any ){
   // return this.http.post<any>(this.commonService.g)
  }
}
