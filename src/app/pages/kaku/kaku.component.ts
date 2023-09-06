import {Component, OnInit} from '@angular/core';
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-kaku',
  templateUrl: './kaku.component.html',
  styleUrls: ['./kaku.component.scss']
})
export class KakuComponent implements OnInit{
  constructor(public commonService: CommonService){

  }

  ngOnInit(): void {
    this.commonService.hideAppDetails();
    this.commonService.hideAppHeader();
  }
}
