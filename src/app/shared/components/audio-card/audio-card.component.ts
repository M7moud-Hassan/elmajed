import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-audio-card',
  templateUrl: './audio-card.component.html',
  styleUrls: ['./audio-card.component.css']
})
export class AudioCardComponent {
  @Input() item:any
  
}
