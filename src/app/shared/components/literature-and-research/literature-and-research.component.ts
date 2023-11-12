import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/core/services/home.service';
declare var $: any;
@Component({
  selector: 'app-literature-and-research',
  templateUrl: './literature-and-research.component.html',
  styleUrls: ['./literature-and-research.component.css']
})
export class LiteratureAndResearchComponent implements AfterViewInit,OnInit  {

  constructor(private service:HomeService,private router:Router) {
   
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
        // this.items[0].show=true
        setTimeout(()=>{
          this.setUpCarousal()
          this.clickItem(this.items[0])
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
      nextArrow:document.getElementsByClassName('next-2'),
      prevArrow:document.getElementsByClassName('prev-2'),
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
  $('#prev-btn1').css({'color':'grey'})
  slick_.on('afterChange', function(event:any, slick:any, currentSlide:any, nextSlide:any) {
    var totalSlides = slick.slideCount;

    var slidesToShow = $('.slick-carousel-2').slick('slickGetOption', 'slidesToShow');
    var hasNext = currentSlide < totalSlides - slidesToShow;
   

    var hasPrevious = currentSlide > 0;
    if (hasNext) {
      $('#next-btn1').css({'color':'#00A58C'})
    } else {
      $('#next-btn1').css({'color':'grey'})
    }
    if (hasPrevious) {
      $('#prev-btn1').css({'color':'#00A58C'})
    } else {
      $('#prev-btn1').css({'color':'grey'})
    }
});
}

  clickItem(item:any){
    if(item.show){
      this.router.navigate(['research/details/',item.slug])
    } else{
    this.items.forEach(it=>{
      if(it.id==item.id){
        it.show=true
        it.width=this.widthDouble
      }else{
        it.show=false
        it.width=this.widthNormal
      }
    })
  }
  }
}
