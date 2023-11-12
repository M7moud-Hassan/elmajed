import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AudioService } from 'src/app/video-and-audio/core/services/audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent {
  @Input() item:any
  play=true
  audioDuration: number=0;
  @ViewChild('audioPlayer') audioPlayer: ElementRef | undefined;

  constructor(private audioService: AudioService) {
  
    
  }

  getAudioDuration() {
    if (this.audioPlayer!.nativeElement.duration) {
      this.audioDuration = this.audioPlayer!.nativeElement.duration;
    }
  }

  playPause(audio: HTMLAudioElement) {
    this.play=!this.play
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  getUrl(url: string) {
    const parts = url.split('/');
    const modifiedUrl = parts.slice(0, -1);
    return "https://drive.google.com/uc?export=download&id=" + modifiedUrl[modifiedUrl.length-1];
  }
}
