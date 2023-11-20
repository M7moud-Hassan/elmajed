import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../core/services/about.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  about:any
  constructor( private service:AboutService) {
    
     
  }
  ngOnInit(): void {
    this.service.getAbout().subscribe({
      next:(response:any)=>{
        if(response.status == 200){
          this.about = response.data.setting;
        }
      },
      error:(error)=>{
        console.log("Error : ===> ==> "+error.description);
      }
    });
  }


}
