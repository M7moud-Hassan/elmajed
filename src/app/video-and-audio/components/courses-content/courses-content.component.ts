import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home/core/services/home.service';
import { DialogVideoImageComponent } from 'src/app/shared/components/dialog-video-image/dialog-video-image.component';

@Component({
  selector: 'app-courses-content',
  templateUrl: './courses-content.component.html',
  styleUrls: ['./courses-content.component.css']
})
export class CoursesContentComponent implements OnInit {
  id:any
  constructor(private route:ActivatedRoute,private service:HomeService,
    ) {
   route.params.subscribe(res=>{
    this.id=res['id']
   })
    
  }
  item:any
  ngOnInit(): void {
    this.getData(this.id)
  }
  @ViewChild('dialog', { static: true }) dialog: DialogVideoImageComponent | undefined;
  play(id_video:any){
    this.dialog!.openVideo('https://www.youtube.com/embed/'+id_video)
  }

  getData(id:any){
    this.service.getDetails(id).subscribe(res=>{
      this.item=res.data.item
      console.log("asdddddddd");
      
      console.log(this.item);
      
    })
  }

  
  
}
