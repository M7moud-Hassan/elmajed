import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-fatwa-details',
  templateUrl: './fatwa-details.component.html',
  styleUrls: ['./fatwa-details.component.css']
})
export class FatwaDetailsComponent implements OnInit {
  questionDetails = {
    img:'',
    title:'',
    date:'',
    id:'',
    ques:''
  };
  answer:any;
  keywords:any[]=[];
  relatedTopics:any[]=[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  const dataString = this.route.snapshot.paramMap.get('data');
  const data = JSON.parse(decodeURIComponent(dataString!));
  this.answer = data.answer;
  this.keywords = data.kwords;
  this.relatedTopics = data.cats;
  this.questionDetails = {
    img:data.img??'',
    title:data.title,
    date:data.date,
    id:data.id,
    ques:data.ques
  };
}
  pageHeaderObj = {
    title:'إجابة الفتوى',
    hasSubTitle : false,
    subtitle:'',
    total:0
  };
}
