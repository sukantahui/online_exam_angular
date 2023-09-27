import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isShowAppDetails = true;
  isShowHeader = true;
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

  constructor() { }
}
