import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';

@Component({
  selector: 'app-fatawa-section',
  templateUrl: './fatawa-section.component.html',
  styleUrls: ['./fatawa-section.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('open', style({
        'max-height': '500px',
      })),
      state('closed', style({
        'max-height': '0',
      })),
      transition('closed <=> open', animate('200ms ease-in-out'))
    ]),
    trigger('colorAnimation', [
      state('black', style({ color: 'black' })),
      state('color', style({ color: 'red' })),
      transition('black <=> color', animate('1s')),
    ])
  ]
})
export class FatawaSectionComponent implements OnInit {
  targetId:number = 0;
  targetIndex:number = 0;
  items: number[] = [1, 2, 3, 4, 5];
  divStates: string[] = [];
  categories:any[]=[];
  constructor(private fatwaService:FatawaService,private activatedRoute:ActivatedRoute,private renderer: Renderer2){ }

  ngOnInit(): void {
    this.getFatawyCategories();
    this.activatedRoute.paramMap.subscribe((param)=>{
      if(param.has("id")){
        this.targetId = Number(param.get("id"));
      }
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
          this.categories.forEach(() => this.divStates.push('closed'));
          if(this.targetId != 0){
            this.targetIndex = this.categories.findIndex((x:any) => x.id ==this.targetId );
            this.divStates[this.targetIndex] = 'open';
            this.scrollToItem(this.targetId);
          }
        }
      },
      error:(error)=>{
      }
    })
  }
  @ViewChild('listContainer', { static: false, read: ElementRef }) listContainer: any;


  scrollToItem(itemId: any) {
    const element = this.listContainer.nativeElement.querySelector(`#${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
