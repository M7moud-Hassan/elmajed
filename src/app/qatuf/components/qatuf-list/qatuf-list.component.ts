import { Component, OnInit } from '@angular/core';
import { ResponseVM, items } from 'src/app/shared/core/models/responseVM';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';
import { PageHeaderVM } from 'src/app/shared/core/models/page-header-vm';
import { QatufService } from '../../core/services/qatuf.service';

@Component({
  selector: 'app-qatuf-list',
  templateUrl: './qatuf-list.component.html',
  styleUrls: ['./qatuf-list.component.css']
})
export class QatufListComponent implements OnInit {
  detailsPath:string = "/qatuf/details";
  items:items[] = [];
  pageNumber:number = 1;
  PageSize:number = 6;
  total:number = 0;
  paginationObj: PaginationVM = {
    count: 0,
    total: 0,
    current_page: 0,
    per_page: 0,
    total_pages: 0,
  };
  pageHeaderObj:PageHeaderVM = {} as PageHeaderVM; 
  constructor(private service:QatufService){}
  ngOnInit(): void {
    this.getPaged();
  }
  getPaged(){
    this.service.getPagedQatuf(this.pageNumber,this.PageSize).subscribe({
      next:(response:ResponseVM)=>{
        if(response.status == 200){
          this.items = response.data.items;
          this.total = response.data.total;
          this.paginationObj = {
            count:response.data.count,
            current_page:response.data.current_page,
            per_page:response.data.per_page,
            total:response.data.total,
            total_pages:response.data.total_pages,
          };
          this.pageHeaderObj = {
            title:'قــطـــــوف',
            hasSubTitle : false,
            subtitle:'',
            total:0
          };
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
  onPageNumberClicked(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getPaged();
  }
}

