import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/core/services/home.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit{
  items:any[]=[]
  constructor(private service:HomeService,private router:Router) {
    
    
  }
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.service.getLectures(1,1000).subscribe(res=>{
      res.data.items.forEach((e:any)=>{
        this.items.push({...e,'type':'lecture'})
      })
         
    })
  }
  select(id:any){
    this.router.navigate(["lectures/lecture-page",id]);
  }
}
