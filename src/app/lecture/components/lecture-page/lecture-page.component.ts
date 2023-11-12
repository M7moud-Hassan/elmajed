import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home/core/services/home.service';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';
declare var $: any;
@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css']
})
export class LecturePageComponent  implements AfterViewInit,OnInit {
  @ViewChild('dialog', { static: true }) dialog: DialogVideoImageComponent | undefined;
  item:any
  slug:any
  slected:any
  play(url:any){
    this.dialog!.openVideo('https://www.youtube.com/embed/'+url.split('/')[url.split('/').length-1])
  }


  constructor(private service:HomeService,private route:ActivatedRoute) {
    route.params.subscribe(res=>{
      this.slug=res['id']
    })
  }
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.service.getDetails(this.slug).subscribe(res=>{
      this.item=res.data.item
      this.slected=this.item
    })
  }
    ngAfterViewInit(): void {
     var slick_= $('.slick-carousel').slick(
        {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          nextArrow:document.getElementById('next'),
          prevArrow:document.getElementById('prev'),
          centerPadding:'0',
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
  
          ]
        }
      );
      $('#prev-btn').hide()
      slick_.on('afterChange', function(event:any, slick:any, currentSlide:any, nextSlide:any) {
        var totalSlides = slick.slideCount;
  
        var slidesToShow = $('.slick-carousel').slick('slickGetOption', 'slidesToShow');
        var hasNext = currentSlide < totalSlides - slidesToShow;
       
  
        var hasPrevious = currentSlide > 0;
        if (hasNext) {
          $('#next-btn').show()
        } else {
          $('#next-btn').hide()
        }
        if (hasPrevious) {
          $('#prev-btn').show()
        } else {
          $('#prev-btn').hide()
        }
    });
    
      
    }

    Select(item:any){
      this.slected=item
    }
}
