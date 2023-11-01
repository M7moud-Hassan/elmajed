import { Component } from '@angular/core';

@Component({
  selector: 'app-fatwa-details',
  templateUrl: './fatwa-details.component.html',
  styleUrls: ['./fatwa-details.component.css']
})
export class FatwaDetailsComponent {
  pageHeaderObj = {
    title:'إجابة الفتوى',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
}
