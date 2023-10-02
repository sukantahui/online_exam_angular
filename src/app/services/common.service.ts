import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isShowAppDetails = true;
  isShowHeader = true;

  private BASE_API_URL = environment.BASE_API_URL;
  route: string | undefined;
  actual_base_api_url="";
  private actual_base_public_url: string;
  private BASE_PUBLIC_URL=environment.BASE_PUBLIC_URL;
  isDevelopment = environment.isDevelopment;
  hideAppDetails(){
    this.isShowAppDetails=false;
  }
  showAppDetails(){
    this.isShowAppDetails=true;
  }
  getShowAppDetails(){
    return this.isShowAppDetails;
  }

  hideAppHeader(){
    this.isShowHeader=false;
  }
  showAppHeader(){
    this.isShowHeader=true;
  }
  getShowAppHeader(){
    return this.isShowHeader;
  }

  constructor() {
    let project_url =window.location.origin;
    let firstArray =  project_url.split("/");
    let secondArray =  firstArray[2].split(":");
    this.actual_base_api_url = (firstArray[0]+"//"+secondArray[0]+this.BASE_API_URL);
    this.actual_base_public_url = (firstArray[0]+"//"+secondArray[0]+this.BASE_PUBLIC_URL);
   }
   getAPI(){
    console.log(this.isDevelopment);
    return this.actual_base_api_url;
  }
}
