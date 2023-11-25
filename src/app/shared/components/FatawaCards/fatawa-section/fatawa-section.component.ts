import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren ,AfterViewInit, AfterViewChecked} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';

@Component({
  selector: 'app-fatawa-section',
  templateUrl: './fatawa-section.component.html',
  styleUrls: ['./fatawa-section.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('open', style({
        'max-height': '2000px',
      })),
      state('closed', style({
        'max-height': '0',
      })),
      transition('closed <=> open', animate('200ms ease-in-out'))
    ]),
  ]
})
export class FatawaSectionComponent implements OnInit, AfterViewChecked {
  targetId:number = 0;
  targetIndex:number = 0;
  divStates: string[] = [];
  categories:any[]=[];
  constructor(private fatwaService:FatawaService,private activatedRoute:ActivatedRoute,private renderer:Renderer2){ }
  @ViewChildren('itemRef') itemRefs: QueryList<ElementRef> = new QueryList();
  ngOnInit(): void {
    this.getFatawyCategories();
    this.activatedRoute.paramMap.subscribe((param)=>{
      if(param.has("id")){
        this.targetId = Number(param.get("id"));
      }
    });
  }
  ngAfterViewChecked() {
    this.itemRefs.forEach((itemRef: ElementRef) => {
      const itemElement = itemRef.nativeElement;
      if(`${itemElement.id}` == `item-${this.targetId}`){
        itemRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
      console.log(itemElement.textContent);
    });
  }
  
  toggleDiv(index: number) {
    this.divStates[index] = this.divStates[index] === 'closed' ? 'open' : 'closed';
  }

  getFatawyCategories(){
    this.fatwaService.getAllFatwaCategories().subscribe({
      next:(res:any)=>{
        if(res.status==200 && res.success==true){
          console.log(res);
          this.categories=res.data.data;
          console.log("categories : ",this.categories);
          this.categories.forEach(() => this.divStates.push('closed'));
          if(this.targetId != 0){
            this.targetIndex = this.categories.findIndex((x:any) => x.id ==this.targetId );
            this.divStates[this.targetIndex] = 'open';
          }
        }
      },
      error:(error)=>{
      }
    })
  }


}
