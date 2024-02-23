import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/core/services/home.service';
import { PageHeaderVM } from '../../core/models/page-header-vm';
declare var $: any;
@Component({
  selector: 'app-audio-and-video',
  templateUrl: './audio-and-video.component.html',
  styleUrls: ['./audio-and-video.component.css']
})
export class AudioAndVideoComponent implements AfterViewInit,OnInit {
  constructor(private service:HomeService,private router:Router) {
  }
  @ViewChild('slickCarousel', { static: true }) slickCarousel: ElementRef | undefined;
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
    $(this.slickCarousel!.nativeElement).slick(
      {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding:'0',
        rtl:true,
        nextArrow:document.getElementsByClassName('outerNext_10'),
        // nextArrow:document.getElementById('next'),
        // prevArrow:document.getElementById('prev'),
        prevArrow:document.getElementsByClassName('outerPrev_10'),
        // arrows:false,
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
              slidesToShow: 1,
              slidesToScroll: 1
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
    const length1=this.lessons.length;
    $(this.slickCarousel!.nativeElement).on('afterChange', (event: any, slick: any, currentSlide: any) => {
      if (currentSlide == this.lessons.length - 2) {
        $(this.slickCarousel!.nativeElement).slick('slickSetOption', 'autoplay', false, true);
        $(this.slickCarousel!.nativeElement).slick('slickGoTo', 1);
      } else if (currentSlide == (this.lessons.length + this.lectures.length) - 2) {
        $(this.slickCarousel!.nativeElement).slick('slickSetOption', 'autoplay', false, true);
        $(this.slickCarousel!.nativeElement).slick('slickGoTo', 1);
      } else if (currentSlide == (this.lessons.length + this.lectures.length + this.courses.length) - 2) {
        $(this.slickCarousel!.nativeElement).slick('slickSetOption', 'autoplay', false, true);
        $(this.slickCarousel!.nativeElement).slick('slickGoTo', 1);
      }
    });
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

  OnItemClick(slug:any){
    this.router.navigate(['video-audio/courses-content/',slug])
  }
}
