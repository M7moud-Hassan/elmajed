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
}
