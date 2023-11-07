import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit  {
  items_carousal:any=[]
  constructor(private service:HomeService) {}
  ngOnInit(): void {
    this.getDataCarousal()
  }

  getDataCarousal(){
    this.service.getProjects(1,10).subscribe(res=>{
      if(res.status==200){
        this.items_carousal=res.data.items     
      }
    })

    this.service.getResearches(1,3).subscribe(res=>{
      
    })
  }

    
}

