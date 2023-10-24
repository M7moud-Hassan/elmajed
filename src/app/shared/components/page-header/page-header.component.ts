import { Component,Input,OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnChanges {
  titleVal:string = '';
  hasSubTitleVal:boolean = true;
  totalVal:string = '';
  subtitleVal:string = '';

  @Input() pageHeaderInfo:any;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.titleVal = this.pageHeaderInfo.title ;
    this.hasSubTitleVal = this.pageHeaderInfo.hasSubTitle;
    this.totalVal = this.pageHeaderInfo.total ;
    this.subtitleVal = this.pageHeaderInfo.subtitle ;
  }
}
