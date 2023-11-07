import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FatawaService } from '../../core/services/fatawa.service';
import {  Router  } from '@angular/router';
import { PopUpCardComponent } from 'src/app/shared/components/pop-up-card/pop-up-card.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-fatawa-advanced-search',
  templateUrl: './fatawa-advanced-search.component.html',
  styleUrls: ['./fatawa-advanced-search.component.css']
})
export class FatawaAdvancedSearchComponent implements AfterViewInit, OnInit {
  result :any[]= [];
  searchModel:any = {
      flt: "",
      title: "",
      ques: "",
      ans: "",
      syn1: "",
      syn2: "",
      syn3: "",
    }
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
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;

  constructor(private service:FatawaService,private router:Router,private dialog:MatDialog){}
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
  onCheckboxChange(checkboxNumber: number) {
    if (checkboxNumber === 1) {
      this.makeAllUnCkecked();
      this.checkbox1 = true;
    } else if (checkboxNumber === 2) {
      this.makeAllUnCkecked();
      this.checkbox2 = true;
    } else if (checkboxNumber === 3) {
      this.makeAllUnCkecked();
      this.checkbox3 = true;
    }
  }
  makeAllUnCkecked(){
    this.checkbox1 = false;
    this.checkbox2 = false;
    this.checkbox3 = false;
  }
  getFilterSign(){
    let sign = "";
    if(this.checkbox1 == true){
      sign = "or";
    }
    else if (this.checkbox2 == true){
      sign = "and";
    }else{
      sign = "";
    }
    return sign;
  }
  search(){
     if(!this.isModelHasData()){
      return;
     }
     this.searchModel.flt = this.getFilterSign();
     this.navigateToRouteWithData();
  }
  detailsData:any;
  getFatawySearch(key:any){
    key = parseInt(key);
    this.service.getFatwaDetails(key).subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true){
          if(res.data.data[0].id != null){
            console.log(res.data.data[0]);
            this.detailsData=res.data.data[0];
            this.navigateToRouteWithDetails();
          }else{
            this.openNotFoundDialog();
          }
        }
      }
    })
  }
  isModelHasData():boolean{
  return this.searchModel.title!="" || this.searchModel.ques!="" || this.searchModel.ans!="" ||
  this.searchModel.syn1!="" || this.searchModel.syn2!="" || this.searchModel.syn3!="";
 }
 onKeyPress(event: KeyboardEvent) {
  const inputChar = String.fromCharCode(event.charCode);
  const pattern = /^[0-9]*$/;
  if (!pattern.test(inputChar)) {
    event.preventDefault();
  }
}
navigateToRouteWithData() {
  // const data = this.detailsData;
  const data = this.searchModel;
  const dataString = encodeURIComponent(JSON.stringify(data));
  const url = `/fatawa/related-questions-by-free-search/${dataString}`;
  this.router.navigateByUrl(url);
}
navigateToRouteWithDetails() {
  const data = this.detailsData;
  const dataString = encodeURIComponent(JSON.stringify(data));
  const url = `/fatawa/details/${dataString}`;
  this.router.navigateByUrl(url);
  // const dataString = encodeURIComponent(JSON.stringify(data));
  // const url = `/fatawa/related-questions-by-free-search/${dataString}`;
  // this.router.navigateByUrl(url);
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
