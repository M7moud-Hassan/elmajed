import { Component } from '@angular/core';

@Component({
  selector: 'app-research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.css']
})
export class ResearchDetailsComponent{
  detailsInfo:any;
  constructor(){
    this.detailsInfo = {
      subTitle1:'ملخص البحـــث :',
      subTitle2:'المزيد :',
      details:'تفاصيل البحث',
      duration:'مدة البحث',
      date:'تاريخ إطلاق البحث',
      author:'مؤلف البحث',
      share:'مشاركة البحث',
    };
  }
}
