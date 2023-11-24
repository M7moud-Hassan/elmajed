import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  detailsInfo:any;
  constructor(){
    this.detailsInfo = {
      subTitle1:'نبذة عن المشروع :',
      subTitle2:'أهداف المشروع:',
      details:'تفاصيل المشروع',
      duration:'مدة المشروع (بالشهر)',
      date:'تاريخ إطلاق المشروع',
      author:'مؤلف المشروع',
      share:'مشاركة المشروع',
    };
  }
}
