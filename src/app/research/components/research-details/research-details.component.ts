import { Component } from '@angular/core';

@Component({
  selector: 'app-research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.css']
})
export class ResearchDetailsComponent {


  /*
   getSlug(){
    this.slug = this.service.activatedRoute.snapshot.paramMap.get('slug')!;
    this.getDetails();
  }
  getDetails(){
    this.service.sharedService.getDetails(this.slug).subscribe({
      next:(response:ResponseDetailsVM)=>{
        if(response.status == 200){
          this.itemDetails = response.data.item  as ResponseDetailsItemDetailsVM; 
        }
      },
      error:(error)=>{
      }
    });
  }

  */
}
