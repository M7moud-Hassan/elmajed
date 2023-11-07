import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCardComponent } from '../../pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-fatawa-quick-search-card',
  templateUrl: './fatawa-quick-search-card.component.html',
  styleUrls: ['./fatawa-quick-search-card.component.css']
})
export class FatawaQuickSearchCardComponent  {
  fatwaTitle:string = "";
  windowWidth:number = 0;
  searchModel:any = {
    flt: "",
    title: "",
    ques: "",
    ans: "",
    syn1: "",
    syn2: "",
    syn3: "",
  }
  constructor(private service:FatawaService,private router:Router, private dialog: MatDialog){}
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
  @ViewChild('FatwaNumber') fatwaNumber: any;
  @ViewChild('FatwaName') fatwaName: any;

  clearInputValue() {
    this.fatwaNumber.nativeElement.value = '';
  }
  clearFatwaNameValue(){
    this.fatwaName.nativeElement.value = '';
  }
  onKeyPress(event: KeyboardEvent) {
    const inputChar = String.fromCharCode(event.charCode);
    const pattern = /^[0-9]*$/;
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
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
            this.navigateToRouteWithData();
            this.clearFatwaNameValue();
            this.clearInputValue();
          }else{
            this.openDialog();
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
  search(title:any){
    if(title == null || title == ""){
     return;
    }
    this.searchModel = {
      flt: "",
      title: title,
      ques: "",
      ans: "",
      syn1: "",
      syn2: "",
      syn3: "",
    }
    this.navigateToRouteWithDeTails();
  }
  navigateToRouteWithDeTails(){
    const data = this.searchModel;
    const dataString = encodeURIComponent(JSON.stringify(data));
    const url = `/fatawa/related-questions-by-free-search/${dataString}`;
    this.router.navigateByUrl(url);
  }
  openDialog() {
    const dialogRef = this.dialog.open(PopUpCardComponent, {
      width: `${this.windowWidth>676?'55%':'100%'}`,
      data: {
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
      console.log('Dialog closed');
    });
  }
}
