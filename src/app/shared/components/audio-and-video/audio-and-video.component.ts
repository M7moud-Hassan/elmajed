import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/core/services/home.service';
declare var $: any;
@Component({
  selector: 'app-audio-and-video',
  templateUrl: './audio-and-video.component.html',
  styleUrls: ['./audio-and-video.component.css']
})
export class AudioAndVideoComponent implements AfterViewInit,OnInit {
  constructor(private service:HomeService) {
  }
  courses:any[]=[]
  lectures:any[]=[]
  lessons:any[]=[]
  index=0
  ngOnInit(): void {
    this.service.getCourses(1,10).subscribe(res=>{
      this.courses=res.data.items
     
      this.service.getLectures(1,10).subscribe(res=>{
        this.lectures=res.data.items
        this.service.getLessons(1,10).subscribe(res=>{
          this.lessons=res.data.items
          console.log(this.lessons);
          
          setTimeout(()=>{
            this.setUpCarousal()
            this.onSelect(0)
          },100)
              })
      })
    })
    
 
   
  }
  ngAfterViewInit(): void {
   
  }
  setUpCarousal(){
    $('#slick-carousel-3').slick(
      {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:'0',
        rtl:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }
    );
  }
  onSelect(id:any){
    this.index=id
   if(id==0){
   $('.asd'+0).show()
   $('.asd'+1).hide()
   $('.asd'+2).hide()
   }
   if(id==1){
   $('.asd'+1).show()
   $('.asd'+2).hide()
   $('.asd'+0).hide()
   }
   if(id==2){
   $('.asd'+2).show()
   $('.asd'+1).hide()
   $('.asd'+0).hide()
   }
  }
}
