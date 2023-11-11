import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-share-card-video',
  templateUrl: './share-card-video.component.html',
  styleUrls: ['./share-card-video.component.css']
})
export class ShareCardVideoComponent {
  @Input() item:any
  @Input() details:any
  @Input() select:boolean=false
}
