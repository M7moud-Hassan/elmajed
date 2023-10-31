import { Component } from '@angular/core';

@Component({
  selector: 'app-fatawa-search-result',
  templateUrl: './fatawa-search-result.component.html',
  styleUrls: ['./fatawa-search-result.component.css']
})
export class FatawaSearchResultComponent {
  searchFor:string = 'الإبراء عن الأعيان';
  pageHeaderSpeedSearchObj = {
    title:'البحث السريع',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
questionDetails = {
    img:'www.salmajed.com/fatwa/fimage/24073',
    title:'الإبراء عن الأعيان',
    date:'2023-05-24 19:12:51',
    id:'362854',
    ques:'س: شيخنا الفاضل .. هل يصح الإبراء عن الأعيان؟ وبالتالي هل يملك المبرأ عنه العين - أي المبرأ منه-؟ جزاكم الله خيرا في الدنيا والآخرة.'
  };
}
