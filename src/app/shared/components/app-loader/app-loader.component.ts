import { ChangeDetectorRef, Component, ElementRef, HostListener, OnChanges, OnInit, ViewChild } from '@angular/core';
import { AppLoaderService } from '../../core/services/app-loader.service';

@Component({
  selector: 'app-app-loader',
  templateUrl: './app-loader.component.html',
  styleUrls: ['./app-loader.component.css']
})
export class AppLoaderComponent implements OnInit {
  showSpinner = false;
  constructor(private spinnerService: AppLoaderService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.init();
  }
  init() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }
}
