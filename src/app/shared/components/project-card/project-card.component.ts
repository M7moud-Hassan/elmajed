import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { items } from '../../core/models/responseVM';
import { SharedService } from '../../core/services/shared.service';
import { MainService } from '../../core/services/main.service';
import { ResponseDetailsItemDetailsVM, ResponseDetailsItemVM, ResponseDetailsVM } from '../../core/models/response-details-vm';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnChanges , OnInit {
  @Input() itemObj:any;
  @Input() detailsPath:any;
  detailsPathVal:string='';
  item:items={} as items;
  slug:string = '';
  itemDetails:ResponseDetailsItemDetailsVM = {} as ResponseDetailsItemDetailsVM;

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
