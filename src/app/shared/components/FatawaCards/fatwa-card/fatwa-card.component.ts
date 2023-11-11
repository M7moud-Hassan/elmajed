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
    if(this.Question.img == ''){
      this.Question.img = '/assets/test-images/bg-image.png';
    }else{
      this.Question.img = `${this.imgApiUrl}/${this.Question.img}`;
    }
    this.questionDetails = this.Question;
  }
}
