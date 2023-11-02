import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FatawaService } from '../../core/services/fatawa.service';

@Component({
  selector: 'app-fatawa',
  templateUrl: './fatawa.component.html',
  styleUrls: ['./fatawa.component.css']
})
export class FatawaComponent implements AfterViewInit, OnInit {
  windowWidth:number = 0;

  daily:any;
  fatawyList :any[]= [];
  questionDetails:any;
  hasNoTodayFatwa:boolean = false;
  answer:string="";
  keywords:any[] = [];
  relatedTopics:any[] = [];
  constructor(private service:FatawaService) {
    this.questionDetails = {
      img:'',
      title:'',
      date:'',
      id:'',
      ques:''
    };
  }
  ngOnInit(): void {
    this.getDailyFatwa();
    this.windowWidth = window.innerWidth;
 }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
  pageHeaderObj = {
    title:'قسم الفتاوى',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  pageHeaderDailyFatwaObj = {
    title:'الفتاوى اليومية',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  pageHeaderSpeedSearchObj = {
    title:'البحث السريع',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  
  questionInfo = {
    img:'/assets/images/question.svg',
    label:'لدي سؤال',
    link:'/fatawa/send-question'
  };
  searchInfo = {
    img:'/assets/images/magnifier.svg',
    label:'ابحث في الفتاوى',
    link:'/fatawa/search'
  };
  todaysFatwaInfo = {
    img:'/assets/images/questions.svg',
    label:'الفتاوى اليومية',
    link:'/fatawa'
  };
  


  @ViewChild('todaysFatwaSection') todaysFatwaSection: any ;

  scrollToTodaysFatwaSection() {
    this.todaysFatwaSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  getDailyFatwa(){
    // this.service.getDailyFatwa().subscribe({
    this.service.getPreferredFatwa().subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true && res.data.data.length>0){
          this.fatawyList = res.data.data;
          let fatwaId = this.fatawyList[0].id;
          this.service.getFatwaDetails(fatwaId).subscribe({
            next:(response:any)=>{
              this.daily = response.data.data[0];
              this.answer = this.daily.answer;
              this.keywords = this.daily.kwords;
              this.relatedTopics = this.daily.cats;
              this.questionDetails = {
                img:this.daily.img,
                title:this.daily.title,
                date:this.daily.date,
                id:this.daily.id,
                ques:this.daily.ques
              };
              // alert(`
              //   -img :  ${this.daily.img}
              //   -title :  ${this.daily.title}
              //   -date :  ${this.daily.date}
              //   -id :  ${this.daily.id}
              //   -ques :  ${this.daily.ques}
              // `);
            }
          }); 
        }else{
          this.hasNoTodayFatwa = true;
        }
      },
      error:(error)=>{
      }
    });
  }
}
