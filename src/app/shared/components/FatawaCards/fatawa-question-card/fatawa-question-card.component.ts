import { Component, OnInit } from '@angular/core';
import { FatawaService } from 'src/app/fatwa/core/services/fatawa.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-fatawa-question-card',
  templateUrl: './fatawa-question-card.component.html',
  styleUrls: ['./fatawa-question-card.component.css']
})
export class FatawaQuestionCardComponent  implements OnInit {

  preferred:any;
  preferredList :any[]= [];
  noFatwaToday:boolean = false;
  imgApiUrl:string = '';
  constructor(private service:FatawaService) {
    this.imgApiUrl = environment.imgApiUrl;
    this.preferred = {
      img:'',
      title:'',
      ques:'',
      answer:''
    };
  }
  pageHeaderObj = {
    title:'فتاوى مختارة',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
  ngOnInit(): void {
     this.getPreferredFatawy();
  }
 
  getPreferredFatawy(){
    this.service.getPreferredFatwa().subscribe({
      next : (res:any)=>{
        if(res.status==200 && res.success==true && res.data.data.length>0){
          this.preferredList = res.data.data;
          let fatwa_Id = this.preferredList[0].id;
          this.service.getFatwaDetails(fatwa_Id).subscribe({
            next:(response:any)=>{
              this.preferred = response.data.data[0];
            }
          }); 
        }
      },
      error:(error)=>{
      }
    })
  }
  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
