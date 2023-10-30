import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ramadan-kareem-islamic-background',
  templateUrl: './ramadan-kareem-islamic-background.component.html',
  styleUrls: ['./ramadan-kareem-islamic-background.component.css']
})
export class RamadanKareemIslamicBackgroundComponent implements OnInit,AfterViewInit  {
  height=window.innerHeight;
  width=window.innerWidth/2;
  show:boolean=false

  constructor(private renderer: Renderer2, private el: ElementRef) {
 
  }
  ngAfterViewInit(): void {
  setTimeout(() => {
    this.modifyToggleHandle()
  }, 100);
  }
  ngOnInit(): void {
   
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
