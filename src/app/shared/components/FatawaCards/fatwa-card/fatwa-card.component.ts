import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-fatwa-card',
  templateUrl: './fatwa-card.component.html',
  styleUrls: ['./fatwa-card.component.css']
})
export class FatwaCardComponent implements OnChanges {
  
  @Input() Question:any;
  questionDetails:any;
  imgApiUrl:string;
  constructor(){
    this.imgApiUrl = environment.imgApiUrl;
    this.questionDetails = {
      img:'',
      title:'',
      date:'',
      id:'',
      ques:''
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.questionDetails = this.Question;
  }
}
