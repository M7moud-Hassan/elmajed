import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/core/services/home.service';

@Component({
  selector: 'app-video-audio',
  templateUrl: './video-audio.component.html',
  styleUrls: ['./video-audio.component.css']
})
export class VideoAudioComponent implements OnInit{

  constructor(private service:HomeService) {
  }
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.service.getCourses(1,10).subscribe(res=>{
      console.log("courses");
      
      console.log(res.data.items);
    this.service.getLessons(1,10).subscribe(res=>{
      console.log(res.data.items);
      
    })
    })
  }
  sidebarDisplay: string = 'none';
  overlayDisplay: string = 'none';

  w3_open() {
    this.sidebarDisplay = 'block';
    this.overlayDisplay = 'block';
  }

  w3_close() {
    this.sidebarDisplay = 'none';
    this.overlayDisplay = 'none';
  }
}
