import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PaginationVM } from '../../core/models/pagination-vm';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  pageNumberList:number[]=[];
  pagination:PaginationVM = {
    total:175,
    count:5,
    per_page:5,
    current_page:2,
    total_pages:7,
  };
  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    this.pagination = {
      count : this.paginationInfo.count,
      current_page : this.paginationInfo.current_page,
      per_page : this.paginationInfo.per_page,
      total : this.paginationInfo.total,
      total_pages : this.paginationInfo.total_pages,
    };
  }
  @Output() pageNumberClicked = new EventEmitter<number>();
  @Input() paginationInfo:any;
  ngOnInit(): void {
    
    this.intializePageNumberList();
  }

  intializePageNumberList(){
      const numbers = this.pagination.total_pages >= 5 ? 5 : this.pagination.total_pages;
      this.pageNumberList = [];
      for (let i = 1; i <= numbers; i++) {
        this.pageNumberList.push(i);
      }
  }
  next(){
    if(this.hasNextPage){
      let periodNumber = (this.pagination.current_page % 5 == 0) ? (this.pagination.current_page / 5) : (Number.parseInt((this.pagination.current_page / 5).toString())+1);
      let startFrom = (periodNumber * 5) + 1;
      this.pageNumberList = [];
      const to = (this.pagination.total_pages >= startFrom+5) ? (startFrom+5) : (this.pagination.total_pages+1);
      for (let i = startFrom; i < to; i++) {
        this.pageNumberList.push(i);
      }
      this.pagination.current_page = this.pageNumberList[0];
      this.changePageByNumber(this.pagination.current_page);
    }
  }
  prev(){
    if(this.hasPrevPage){
      let periodNumber = (this.pagination.current_page % 5 == 0) ? (this.pagination.current_page / 5) : (Number.parseInt((this.pagination.current_page / 5).toString())+1);
      let startFrom = (periodNumber * 5) - 5 ;
      this.pageNumberList = [];
      for (let i = startFrom; i > (startFrom-5); i--) {
        this.pageNumberList.push(i);
      }
      this.pageNumberList.reverse();
      this.pagination.current_page = this.pageNumberList[4];
      this.changePageByNumber(this.pagination.current_page);
    }
  }

  get hasNextPage(){
    let periodNumber = (this.pagination.current_page % 5 == 0) ? (this.pagination.current_page / 5) : (Number.parseInt((this.pagination.current_page / 5).toString())+1);
    return this.pagination.total_pages >  periodNumber* 5 ;
  }
  get hasPrevPage(){
    return this.pagination.current_page > 5;
  }
  changePageByNumber(pageNo:number){
    if(pageNo == -1){
      return;
    }
    this.pageNumberClicked.emit(pageNo);
  }
}
