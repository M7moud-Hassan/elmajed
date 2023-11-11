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
  items:any[]=[]
  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.service.getCourses(1, 1000).subscribe(res => {
      const items1 = res.data.items;
      this.service.getLessons(1, 1000).subscribe(res2 => {
        const items2 = res2.data.items;
        console.log(res2.data.items);
        
        this.items = this.interleaveArrays(items1, items2);
      });
    });
  }
  interleaveArrays(arr1: any[], arr2: any[]): any[] {
    const result = [];
    const maxLength = Math.max(arr1.length, arr2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        result.push({...arr1[i],'type':'course'});
      }
      if (i < arr2.length) {
        result.push({...arr2[i],'type':'lession'});
      }
    }
  
    return result;
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
