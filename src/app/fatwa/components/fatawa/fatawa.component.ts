import { Component } from '@angular/core';

@Component({
  selector: 'app-fatawa',
  templateUrl: './fatawa.component.html',
  styleUrls: ['./fatawa.component.css']
})
export class FatawaComponent {
  pageHeaderObj = {
    title:'قسم الفتاوى',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  questionInfo = {
    img:'/assets/images/question.svg',
    label:'لدي سؤال',
    link:'/fatawa/send-question'
  };
  searchInfo = {
    img:'/assets/images/magnifier.svg',
    label:'ابحث في الفتاوى',
    link:'/fatawa/search'
  };
}
