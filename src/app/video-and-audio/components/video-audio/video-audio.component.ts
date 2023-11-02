import { Component } from '@angular/core';

@Component({
  selector: 'app-video-audio',
  templateUrl: './video-audio.component.html',
  styleUrls: ['./video-audio.component.css']
})
export class VideoAudioComponent {
  sidebarDisplay: string = 'none';
  overlayDisplay: string = 'none';

  w3_open() {
    this.sidebarDisplay = 'block';
    this.overlayDisplay = 'block';
  }

  w3_close() {
    this.sidebarDisplay = 'none';
    this.overlayDisplay = 'none';
  }
}
