import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HomeService } from 'src/app/home/core/services/home.service';

@Component({
  selector: 'app-ramadan-kareem-islamic-background',
  templateUrl: './ramadan-kareem-islamic-background.component.html',
  styleUrls: ['./ramadan-kareem-islamic-background.component.css']
})
export class RamadanKareemIslamicBackgroundComponent implements OnInit,AfterViewInit  {
  height=window.innerHeight;
  width=window.innerWidth/2;
  show:boolean=false
  slides:any[]=[]

  constructor(private renderer: Renderer2, private el: ElementRef,
    private service:HomeService) {

  }
  ngAfterViewInit(): void {
   setTimeout(() => {
     this.modifyToggleHandle()
   }, 10);
  }

  ngOnInit(): void {
    //  this.modifyToggleHandle()
    this.service.getSliderImages().subscribe(res=>{
     
      
      
      this.slides=res.data.items
    })
  }

  modifyToggleHandle() {
    const toggleHandle = this.el.nativeElement.querySelector('.toggle-handle');
    if (toggleHandle) {      
      this.renderer.addClass(toggleHandle, 'width-btn');
    }
  }
  change(event:any){
    this.show=!this.show
    
  }

}
