import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FatawaService } from '../../core/services/fatawa.service';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';
import { PageHeaderVM } from 'src/app/shared/core/models/page-header-vm';

@Component({
  selector: 'app-related-questions',
  templateUrl: './related-questions.component.html',
  styleUrls: ['./related-questions.component.css']
})
export class RelatedQuestionsComponent implements OnInit {
  id:any;
  detailsPath:string = "/project/details";
  items:any[] = [];
  pageNumber:number = 1;
  PageSize:number = 1000;
  total:number = 0;
  selectedItems:any[]=[];
  paginationObj: PaginationVM = {
    count: 0,
    total: 0,
    current_page: 0,
    per_page: 0,
    total_pages: 0,
  };
  pageHeaderObj:PageHeaderVM = {} as PageHeaderVM; 
  constructor(private service:FatawaService,private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe(param=>{
      this.id= param.get("id")??"";
      this.getAllItems();
   });
  }

  getAllItems(){
    this.service.GETListFatwaByFatwaCategory(this.id,this.pageNumber,this.PageSize).subscribe({
      next:(response:any)=>{
        if(response.status == 200){
          this.items = response.data.data;
          this.total = this.items.length;
          this.onPageNumberClicked(1);
          this.pageHeaderObj = {
            title:'الفتاوى المتعلقة',
            hasSubTitle : false,
            subtitle:'',
            total:this.total
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
    this.getElementsByPageSize(pageNumber,15);
  }
  
    getElementsByPageSize(currentPage:number,pageSize: number ){
      let length = this.items.length;
      const pageCount = Math.ceil(length / pageSize);
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, length);
      const elements = this.items.slice(startIndex, endIndex);
      this.selectedItems = elements;
      this.paginationObj = {
        total: length ,
        count: elements.length,
        per_page: pageSize,
        current_page: currentPage,
        total_pages: pageCount
      };
    }
}
