import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';

@Component({
  selector: 'app-fatawa-categories-section',
  templateUrl: './fatawa-categories-section.component.html',
  styleUrls: ['./fatawa-categories-section.component.css']
})
export class FatawaCategoriesSectionComponent implements OnInit {
  categories :any[]= [];
  constructor(private service:FatawaService,private router:Router) {}
  ngOnInit(): void {
    this.getFatawyCategories();
  }
  getFatawyCategories(){
    this.service.getAllFatwaCategories().subscribe({
      next:(res:any)=>{
        if(res.status==200 && res.success==true){
          this.categories=res.data.data;
        }
      },
      error:(error)=>{
      }
    })
  }
  getCategoryDate(id:any){
    this.service.GETListFatwaByFatwaCategory(id,0,1000).subscribe({
      next:(response:any)=>{
        if(response.status == 200){
          let data = response?.data?.data;
          if(data.length > 0){
            this.router.navigate([`/fatawa/related-questions/${id}`]);
          }else{
            this.router.navigate([`/fatawa/search/${id}`]);
          }
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }
}
