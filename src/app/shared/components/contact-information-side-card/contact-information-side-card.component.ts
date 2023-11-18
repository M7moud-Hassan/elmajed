import { Component, OnInit } from '@angular/core';
import { ResponseVM } from '../../core/models/responseVM';
import { AboutService } from '../../core/services/about.service';

@Component({
  selector: 'app-contact-information-side-card',
  templateUrl: './contact-information-side-card.component.html',
  styleUrls: ['./contact-information-side-card.component.css']
})
export class ContactInformationSideCardComponent implements OnInit {
  about:any;
  constructor(private service:AboutService){}
  ngOnInit(): void {
    this.getabout();
  }
  getabout(){
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
