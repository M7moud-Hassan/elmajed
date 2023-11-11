import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  detailsInfo:any;
  constructor(){
    this.detailsInfo = {
      pageTitle:'تفاصيل التدوينة',
      type:'blog', 
    };
  }
}
