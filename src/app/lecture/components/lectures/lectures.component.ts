import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/core/services/home.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit{
  items:any[]=[]
  constructor(private service:HomeService) {
    
    
  }
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.service.getLectures(1,10).subscribe(res=>{
      this.items=res.data.items      
    })
  }
}
