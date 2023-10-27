import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-office-projects',
  templateUrl: './office-projects.component.html',
  styleUrls: ['./office-projects.component.css']
})
export class OfficeProjectsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.slick-carousel').slick(
      {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:document.getElementById('next'),
        prevArrow:document.getElementById('prev'),
      }
    );
  }

}
