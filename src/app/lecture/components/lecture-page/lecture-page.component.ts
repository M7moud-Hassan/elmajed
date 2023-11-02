import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';
declare var $: any;
@Component({
  selector: 'app-lecture-page',
  templateUrl: './lecture-page.component.html',
  styleUrls: ['./lecture-page.component.css']
})
export class LecturePageComponent  implements AfterViewInit {
  @ViewChild('dialog', { static: true }) dialog: DialogVideoImageComponent | undefined;
  play(){
    this.dialog!.openVideo('https://www.youtube.com/embed/DZYXs7WqZww?si=KGWKRSqpixaMoenW')
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
}
