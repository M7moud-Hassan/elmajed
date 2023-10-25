import { AfterViewInit, Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { items } from '../../core/models/responseVM';
import { MainService } from '../../core/services/main.service';
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnChanges , OnInit, AfterViewInit {
  windowWidth:number = 0;
  @Input() itemObj:any;
  @Input() detailsPath:any;
  detailsPathVal:string='';
  item:items={} as items;
  slug:string = '';
  constructor(private service:MainService){}
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
  }
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
