import { Component } from '@angular/core';

@Component({
  selector: 'app-elmowjaz-details',
  templateUrl: './elmowjaz-details.component.html',
  styleUrls: ['./elmowjaz-details.component.css']
})
export class ElmowjazDetailsComponent {
  detailsInfo:any;
  constructor(){
    this.detailsInfo = {
      pageTitle:'تفاصيل الموجز الفقي',
      type:'elmowjaz'
    };
  }
}
