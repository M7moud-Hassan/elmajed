import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {
  @Input() height=300
  @Input() width=200
  @Input() image=''
}
