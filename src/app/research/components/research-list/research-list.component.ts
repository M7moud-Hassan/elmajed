import { Component, OnInit } from '@angular/core';
import { ResponseVM, items } from 'src/app/shared/core/models/responseVM';
import { ResearchService } from '../../core/services/research.service';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';

@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.css']
})
export class ResearchListComponent implements OnInit {
  items:items[] = [];
  pageNumber:number = 1;
  PageSize:number = 1;
  total:number = 0;
  paginationObj: PaginationVM = {
    count: 0,
    total: 0,
    current_page: 0,
    per_page: 0,
    total_pages: 0,
  };
  constructor(private service:ResearchService){}
  ngOnInit(): void {
    this.getPaged();
  }
  getPaged(){
    this.service.getPagedResearch(this.pageNumber,this.PageSize).subscribe({
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
