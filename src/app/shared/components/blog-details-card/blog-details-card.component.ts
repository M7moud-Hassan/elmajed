import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import { ResponseDetailsItemDetailsVM, ResponseDetailsVM } from '../../core/models/response-details-vm';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogService } from 'src/app/blog/core/services/blog.service';
import { ResponseVM } from '../../core/models/responseVM';
import { ElmowjazService } from 'src/app/al-mawjaz-al-fiqhi/core/services/elmowjaz.service';


@Component({
  selector: 'app-blog-details-card',
  templateUrl: './blog-details-card.component.html',
  styleUrls: ['./blog-details-card.component.css']
})
export class BlogDetailsCardComponent implements OnInit {
  slug:string='';
  pageHeaderObj: any = {};
  itemDetails:ResponseDetailsItemDetailsVM = {} as ResponseDetailsItemDetailsVM;
  detailsLabel:any;
  readMoreList:any[]=[];
  total:number = 0;
  @Input() detailsInfo:any;
  constructor(private service: MainService,private elmowjazService:ElmowjazService,private activatedRoute: ActivatedRoute,private location:Location,private blogService:BlogService) { }
  ngOnInit(): void {
    this.getSlug();
    this.detailsLabel = this.detailsInfo;
    this.pageHeaderObj = {
      title: this.detailsLabel.pageTitle,
      hasSubTitle: false,
      subtitle: '',
      total: 0
    };
    this.getReadList();
  }
  @ViewChild('pageTop') pageTop: any ;

  scrollToTodaysFatwaSection() {
    this.pageTop.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  getSlug() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.slug = param.get("slug")??"";
      // alert(this.slug)
      this.getDetails();
      this.scrollToTodaysFatwaSection();
    });
  }
  getDetails() {
    this.service.sharedService.getDetails(this.slug).subscribe({
      next: (response: ResponseDetailsVM) => {
        if (response.status == 200) {
          this.itemDetails = response.data.item as ResponseDetailsItemDetailsVM;
        }
      },
      error: (error) => {
      }
    });
  }

  get getItemLink(){
    const fullPath = window.location.href;
    return fullPath;
  }
  get getFacebookUrl(){
    let url = `https://m.facebook.com/sharer/sharer.php?u=${this.getItemLink}`;
    return url;
  }
  getReadList(){
    const type = this.detailsLabel.type;
    switch(type){
      case 'blog' : this.getReadMoreBlogItems(); break;
      case 'elmowjaz' : this.getReadMoreElmowjazItems(); break;
      default : break;
    }
    
  }
  getReadMoreBlogItems(){
    this.blogService.getPagedBlogs(1,25).subscribe({
      next:(response:ResponseVM)=>{
        if(response.status == 200){
          const listItems = response.data.items;
          this.total = response.data.total;
          console.log(listItems);
          this.readMoreList = this.shuffleList(listItems);
          console.log(this.readMoreList);
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
  getReadMoreElmowjazItems(){
    this.elmowjazService.getPagedElmowjaz(1,25).subscribe({
      next:(response:ResponseVM)=>{
        if(response.status == 200){
          const listItems = response.data.items;
          this.total = response.data.total;
          console.log(listItems);
          this.readMoreList = this.shuffleList(listItems);
          console.log(this.readMoreList);
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
  shuffleList<T>(list: T[]): T[] {
    const newList = [...list]; // Create a new array to avoid modifying the original list
  
    for (let i = newList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }

    return newList;
  }
  
}

