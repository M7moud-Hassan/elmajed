import { Component, OnInit } from '@angular/core';
import { ResponseVM, items } from 'src/app/shared/core/models/responseVM';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';
import { PageHeaderVM } from 'src/app/shared/core/models/page-header-vm';
import { ElmowjazService } from '../../core/services/elmowjaz.service';

@Component({
  selector: 'app-elmowjaz-list',
  templateUrl: './elmowjaz-list.component.html',
  styleUrls: ['./elmowjaz-list.component.css']
})
export class ElmowjazListComponent implements OnInit {
  detailsPath:string = "/al-mawjaz-al-fiqhi/details";
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
  constructor(private service:ElmowjazService){}
  ngOnInit(): void {
    this.getPaged();
  }
  getPaged(){
    this.service.getPagedElmowjaz(this.pageNumber,this.PageSize).subscribe({
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
            title:'المــوجز الفقهــى',
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
