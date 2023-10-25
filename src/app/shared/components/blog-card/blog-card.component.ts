import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { items } from '../../core/models/responseVM';
import { MainService } from '../../core/services/main.service';
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnChanges , OnInit {
  @Input() itemObj:any;
  @Input() detailsPath:any;
  detailsPathVal:string='';
  item:items={} as items;
  slug:string = '';
  constructor(private service:MainService){}

  ngOnInit(): void {
    this.getSlug();
    this.detailsPathVal = this.detailsPath;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.item = this.itemObj;
    
  }
  getItemLink(slug:string){
    return this.service.sharedService.getItemLink(this.detailsPathVal,slug);
  }
  getFacebookUrl(slug:string){
    let url = `https://m.facebook.com/sharer/sharer.php?u=${this.getItemLink(slug)}`;
    return url;
  }
  getSlug(){
    this.slug = this.service.activatedRoute.snapshot.paramMap.get('slug')!;
  }
  

}
