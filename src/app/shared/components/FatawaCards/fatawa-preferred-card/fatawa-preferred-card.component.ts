import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fatawa-preferred-card',
  templateUrl: './fatawa-preferred-card.component.html',
  styleUrls: ['./fatawa-preferred-card.component.css']
})
export class FatawaPreferredCardComponent implements OnChanges {
  @Input() title:any;
  @Input() label:any;
  @Input() link:any;
  title_info:any;
  label_info:any;
  link_info:any;

  ngOnChanges(changes: SimpleChanges): void {
    this.title_info = this.title;
    this.label_info = this.label;
    this.link_info = this.link;
  }
  
}
