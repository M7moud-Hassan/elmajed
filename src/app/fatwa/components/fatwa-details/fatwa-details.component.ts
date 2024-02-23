import { AfterViewInit, Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FatawaService } from '../../core/services/fatawa.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCardComponent } from 'src/app/shared/components/pop-up-card/pop-up-card.component';

@Component({
  selector: 'app-fatwa-details',
  templateUrl: './fatwa-details.component.html',
  styleUrls: ['./fatwa-details.component.css']
})
export class FatwaDetailsComponent implements OnInit,OnChanges,AfterViewInit {
  questionDetails = {
    img:'',
    title:'',
    date:'',
    id:'',
    ques:''
  };
  answer:any;
  windowWidth:number = 0;
  keywords:any[]=[];
  relatedTopics:any[]=[];
  constructor(private route: ActivatedRoute,private service:FatawaService,private router:Router,private dialog:MatDialog) { }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
  ngOnChanges(changes: SimpleChanges): void {
  //   let dataString:any;
  //  this.route.paramMap.subscribe(param=>{
  //     dataString= param.get("data")??"";
  //     const data = JSON.parse(decodeURIComponent(dataString!));
  //     this.answer = data.answer;
  //     this.keywords = data.kwords;
  //     this.relatedTopics = data.cats;
  //     this.questionDetails = {
  //       img:data.img??'',
  //       title:data.title,
  //       date:data.date,
  //       id:data.id,
  //       ques:data.ques
  //     };
  //   });
  let fatwaId:any;
   this.route.paramMap.subscribe(param=>{
    fatwaId= param.get("id")??"";
    this.getFatawaById(fatwaId);
  });
   
  }
  getFatawaById(key:any){
    this.service.getFatwaDetails(key).subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true){
          if(res.data!.data[0].id != null){
            console.log("Fatwa Details : === > ",res.data.data[0]);
            let detailsData=res.data.data[0];
                this.answer = detailsData.answer;
                this.keywords = detailsData.kwords;
                this.relatedTopics = detailsData.cats;
                this.questionDetails = {
                  img:detailsData.img??'',
                  title:detailsData.title,
                  date:detailsData.date,
                  id:detailsData.id,
                  ques:detailsData.ques
                };
          }else{
            this.openNotFoundDialog();
          }
        }
      }
    })
  }
  ngOnInit(): void {
    // let dataString:any;
    // this.route.paramMap.subscribe(param=>{
    //    dataString= param.get("data")??"";
    //    const data = JSON.parse(decodeURIComponent(dataString!));
    //    this.answer = data.answer;
    //    this.keywords = data.kwords;
    //    this.relatedTopics = data.cats;
    //    this.questionDetails = {
    //      img:data.img??'',
    //      title:data.title,
    //      date:data.date,
    //      id:data.id,
    //      ques:data.ques
    //    };
    //  });
    this.windowWidth = window.innerWidth;
    let fatwaId:any;
    this.route.paramMap.subscribe(param=>{
     fatwaId= param.get("id")??"";
     this.getFatawaById(fatwaId);
   });
}
  pageHeaderObj = {
    title:'إجابة الفتوى',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };

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
          this.router.navigate([url]);
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
