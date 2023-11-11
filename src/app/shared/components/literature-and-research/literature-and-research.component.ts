import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/core/services/home.service';
declare var $: any;
@Component({
  selector: 'app-literature-and-research',
  templateUrl: './literature-and-research.component.html',
  styleUrls: ['./literature-and-research.component.css']
})
export class LiteratureAndResearchComponent implements AfterViewInit,OnInit  {

  constructor(private service:HomeService) {
   
  }
  ngOnInit(): void {
    if (window.innerWidth <= 767) {
      this.isMobile=true
  } else {
    this.isMobile=false
  }

  this.getdata();
  }
  getdata(){
    this.service.getResearches(1,10).subscribe(res=>{
      res.data.items.forEach((e:any)=>{
        this.items.push({
             show:false,
    width:this.widthDouble
    ,...e
        })
        this.items[0].show=true
        setTimeout(()=>{
          this.setUpCarousal()
        },100)
      })
    
      
    })
  }
  widthNormal=window.innerWidth/4+'px'
  widthDouble=window.innerWidth/2 +'px'
  isMobile=false
  items :any[]=[
  //   {
  //   id:1,
  //   show:true,
  //   width:this.widthDouble
  // },
  // {
  //   id:2,
  //   show:false,
  //   width:this.widthNormal
  // },
  // {
  //   id:3,
  //   show:false,
  //   width:this.widthNormal
  // },
  // {
  //   id:4,
  //   show:false,
  //   width:this.widthNormal
  // }
]
  
  ngAfterViewInit(): void {
   
    
  }

setUpCarousal(){
  var firstElementWidth = $('.slick-carousel-2').first().width();
  this.widthNormal=firstElementWidth/4+'px'
  this.widthDouble=firstElementWidth/2 +'px'
  
  const slick_=$('.slick-carousel-2').slick(
    {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow:document.getElementById('next-2'),
      prevArrow:document.getElementById('prev-2'),
      centerPadding:'0',
      // centerMode: true,
      rtl:true,
      variableWidth: true,
      responsive: [
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rtl:false,
            variableWidth: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl:false,
            variableWidth: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    }
  );
  $('#prev-btn1').hide()
  slick_.on('afterChange', function(event:any, slick:any, currentSlide:any, nextSlide:any) {
    var totalSlides = slick.slideCount;

    var slidesToShow = $('.slick-carousel-2').slick('slickGetOption', 'slidesToShow');
    var hasNext = currentSlide < totalSlides - slidesToShow;
   

    var hasPrevious = currentSlide > 0;
    if (hasNext) {
      $('#next-btn1').show()
    } else {
      $('#next-btn1').hide()
    }
    if (hasPrevious) {
      $('#prev-btn1').show()
    } else {
      $('#prev-btn1').hide()
    }
});
}

  clickItem(id:number){ 
    this.items.forEach(it=>{
      if(it.id==id){
        it.show=true
        it.width=this.widthDouble
      }else{
        it.show=false
        it.width=this.widthNormal
      }
    })
  }
}
