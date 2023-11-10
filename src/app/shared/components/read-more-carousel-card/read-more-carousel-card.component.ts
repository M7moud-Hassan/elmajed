import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read-more-carousel-card',
  templateUrl: './read-more-carousel-card.component.html',
  styleUrls: ['./read-more-carousel-card.component.css']
})
export class ReadMoreCarouselCardComponent implements OnInit {
  detailsPath:string = ""; // TODO : change the route for 
  @Input() item:any;
  @Input() type:any;
  constructor(private service:MainService,private router:Router){}
  ngOnInit(): void {
    this.assignDetailsPath();
  }
  assignDetailsPath(){
   if(this.type == "blog"){
    this.detailsPath="/blogs/details";
   }else if(this.type == "elmowjaz"){
    this.detailsPath="/al-mawjaz-al-fiqhi/details";
   }
  }
  getItemLink(slug:string){
    return this.service.sharedService.getItemLink(this.detailsPath,slug);
  }
  getFacebookUrl(slug:string){
    let url = `https://m.facebook.com/sharer/sharer.php?u=${this.getItemLink(slug)}`;
    return url;
  }
  
}
