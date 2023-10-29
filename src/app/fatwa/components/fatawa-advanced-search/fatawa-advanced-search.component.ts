import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-fatawa-advanced-search',
  templateUrl: './fatawa-advanced-search.component.html',
  styleUrls: ['./fatawa-advanced-search.component.css']
})
export class FatawaAdvancedSearchComponent implements AfterViewInit, OnInit {

  windowWidth:number = 0;
  pageHeaderObj:any = {
    title:'البحث المتقدم',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  sectionHeaderObj:any = {
    title:'الأقسام',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }
  

}
