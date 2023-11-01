import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../core/services/main.service';
import { ResponseDetailsItemDetailsVM, ResponseDetailsVM } from '../../core/models/response-details-vm';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.css']
})
export class ProjectDetailsCardComponent implements OnInit {
  slug:string='';
  pageHeaderObj: any = {};
  itemDetails:ResponseDetailsItemDetailsVM = {} as ResponseDetailsItemDetailsVM;
  detailsLabel:any;
  @Input() detailsInfo:any;
  constructor(private service: MainService,private activatedRoute: ActivatedRoute,private location:Location) { }
  ngOnInit(): void {
    this.getSlug();
    this.detailsLabel = this.detailsInfo;
  }
  getSlug() {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.slug = param.get("slug")??"";
    });
    this.getDetails();
  }
  getDetails() {
    this.service.sharedService.getDetails(this.slug).subscribe({
      next: (response: ResponseDetailsVM) => {
        if (response.status == 200) {
          this.itemDetails = response.data.item as ResponseDetailsItemDetailsVM;
          this.pageHeaderObj = {
            title: this.itemDetails.title,
            hasSubTitle: false,
            subtitle: '',
            total: 0
          };
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
}
