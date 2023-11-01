import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';
import { ResponseVM } from 'src/app/shared/core/models/responseVM';

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
    ])
  ]
})
export class FatawaSectionComponent implements OnInit {

  
  items: number[] = [1, 2, 3, 4, 5];
  divStates: string[] = [];
  categories:any[]=[];
  constructor(private fatwaService:FatawaService){ }

  ngOnInit(): void {
    this.getFatawyCategories();
  }
  
  toggleDiv(index: number) {
    this.divStates[index] = this.divStates[index] === 'closed' ? 'open' : 'closed';
  }

  getFatawyCategories(){
    this.fatwaService.getAllFatwaCategories().subscribe({
      next:(res:any)=>{
        if(res.status==200 && res.success==true){
          this.categories=res.data.data;
          this.categories.forEach(() => this.divStates.push('closed'));
        }
      },
      error:(error)=>{
      }
    })
  }
}
