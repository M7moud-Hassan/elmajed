import { AfterViewInit, Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent implements OnChanges {
  @Input() cardInfo:any;
  info:any;

  ngOnChanges(changes: SimpleChanges): void {
    this.info = this.cardInfo; 
  }
}
