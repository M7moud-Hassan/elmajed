import { ChangeDetectorRef, Component, HostListener, OnChanges, OnInit } from '@angular/core';
import { AppLoaderService } from '../../core/services/app-loader.service';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.css']
})
export class AppLoaderComponent implements OnInit {
  showSpinner = false;
  windowHeight: number;
  windowWidth: number;

  constructor(private spinnerService: AppLoaderService, private cdRef: ChangeDetectorRef) {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
onResize(event:any) {
  this.windowHeight = window.innerHeight;
  this.windowWidth = window.innerWidth;
}
  ngOnInit() {
    this.init();
  }
  
  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      // alert(status);
      this.cdRef.detectChanges();
    });
  }
}
