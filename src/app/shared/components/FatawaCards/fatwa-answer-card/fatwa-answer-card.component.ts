import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fatwa-answer-card',
  templateUrl: './fatwa-answer-card.component.html',
  styleUrls: ['./fatwa-answer-card.component.css']
})
export class FatwaAnswerCardComponent implements OnChanges {
 @Input() answer:any;
 answer_info :any ;
 ngOnChanges(changes: SimpleChanges): void {
  this.answer_info = this.answer;
}
}
