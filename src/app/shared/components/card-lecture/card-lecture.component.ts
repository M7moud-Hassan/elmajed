import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-lecture',
  templateUrl: './card-lecture.component.html',
  styleUrls: ['./card-lecture.component.css']
})
export class CardLectureComponent {
@Input() item:any
}
