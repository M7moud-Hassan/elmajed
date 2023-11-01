import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fatawa-button-card',
  templateUrl: './fatawa-button-card.component.html',
  styleUrls: ['./fatawa-button-card.component.css']
})
export class FatawaButtonCardComponent implements OnChanges {
  info:any;
  @Input() data:any;

  ngOnChanges(changes: SimpleChanges): void {
    this.info = this.data;
  }
}
