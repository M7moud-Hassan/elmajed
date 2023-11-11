import { Component, OnInit } from '@angular/core';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';

@Component({
  selector: 'app-fatawa-categories-section',
  templateUrl: './fatawa-categories-section.component.html',
  styleUrls: ['./fatawa-categories-section.component.css']
})
export class FatawaCategoriesSectionComponent implements OnInit {
  categories :any[]= [];
  constructor(private service:FatawaService) {}
  ngOnInit(): void {
    this.getFatawyCategories();
  }
  getFatawyCategories(){
    this.service.getAllFatwaCategories().subscribe({
      next:(res:any)=>{
        if(res.status==200 && res.success==true){
          console.log(res);
          this.categories=res.data.data;
        }
      },
      error:(error)=>{
      }
    })
  }
}
