import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-audio-and-video',
  templateUrl: './audio-and-video.component.html',
  styleUrls: ['./audio-and-video.component.css']
})
export class AudioAndVideoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.slick-carousel-3').slick(
      {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }
    );
  }
}
