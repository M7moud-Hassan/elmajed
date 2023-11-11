import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FatawaService } from '../../core/services/fatawa.service';
import { PaginationVM } from 'src/app/shared/core/models/pagination-vm';
import { PageHeaderVM } from 'src/app/shared/core/models/page-header-vm';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCardComponent } from 'src/app/shared/components/pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-related-questions',
  templateUrl: './related-questions.component.html',
  styleUrls: ['./related-questions.component.css']
})
export class RelatedQuestionsComponent implements OnInit {
  windowWidth:number = 0;
  detailsData:any;
  id:any = "";
  keyword:any = "";
  search:any;
  searchModel:any;
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
  constructor(private service:FatawaService,private activatedRoute: ActivatedRoute,private router:Router,private dialog: MatDialog) { }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe(param=>{
      this.id= param.get("id") ?? "";
      this.keyword= param.get("keyword") ?? "";
      this.search= param.get("search") ?? "";

      if(this.id != ""){
        this.getAllItems();
      }else if(this.keyword != ""){
        this.getAllItemsByKeyword();
      }else if(this.search != ""){
        const data = JSON.parse(decodeURIComponent(this.search!));
        this.searchModel = data;
        this.searchModel = {
          flt: this.searchModel.flt,
          title: this.searchModel.title,
          ques: this.searchModel.ques,
          ans: this.searchModel.ans,
          syn1: this.searchModel.syn1,
          syn2: this.searchModel.syn2,
          syn3: this.searchModel.syn3,
        };
        this.getAllItemsByFreeSearch();
      }
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
          if(this.total == 0){
            this.openNotFoundDialog();
          }
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
  getAllItemsByKeyword(){
    this.service.GETListFatwaByKeyword(this.keyword,this.pageNumber,this.PageSize).subscribe({
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
          if(this.total == 0){
            this.openNotFoundDialog();
          }
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
  getAllItemsByFreeSearch(){
    this.service.getFatwaFreeSearch(this.searchModel,this.pageNumber,this.PageSize).subscribe({
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
          if(this.total == 0){
            this.openNotFoundDialog();
          }
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
  onPageNumberClicked(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getElementsByPageSize(pageNumber,10);
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

  getFatawaDetails(key:any){
    this.service.getFatwaDetails(key).subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true){
          if(res.data!.data[0].id != null){
            console.log(res.data.data[0]);
            this.detailsData=res.data.data[0];
            this.navigateToRouteWithData();
          }else{
            alert("Not found")
          }
        }
      }
    })
  }
  
  navigateToRouteWithData() {
    const data = this.detailsData;
    const dataString = encodeURIComponent(JSON.stringify(data));
    const url = `/fatawa/details/${dataString}`;
    this.router.navigateByUrl(url);
  }

  openNotFoundDialog() {
    const dialogRef = this.dialog.open(PopUpCardComponent, {
      width: `${this.windowWidth>676?'55%':'100%'}`,
      disableClose: true,
      data: {
        reason:'notFound',
        title: 'عفوا لم نجد نتيجه تطابق بحثك ',
        message: 'يمكنك اعادة البحث مره أخرى بكلمات اكثر دقه',
        image:'/assets/images/popUp_3.svg',
        label:'أعد البحث',
        submit:()=>{
          const url = `/fatawa/search`;
          this.router.navigateByUrl(url);
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      //
    });
  }
}