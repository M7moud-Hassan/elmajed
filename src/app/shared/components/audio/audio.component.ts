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
  @Input() text='';
  audioDuration: string='';
  @ViewChild('audioPlayer') audioPlayer: ElementRef | undefined;

  constructor(private audioService: AudioService) {
  
    
  }

  getAudioDuration() {
    
    if (this.audioPlayer!.nativeElement.duration) {
      console.log(this.audioPlayer!.nativeElement.duration);
      
      var durations =this.audioPlayer!.nativeElement.duration;
      const hours: number = Math.floor(durations / 3600);
    const minutes: number = Math.floor((durations % 3600) / 60);
    const remainingSeconds: number = durations % 60;

    const formattedHours: string = this.padNumber(hours);
    const formattedMinutes: string = this.padNumber(minutes);
    const formattedSeconds: string = Math.floor(Number(this.padNumber(remainingSeconds))).toString();
    this.audioDuration= `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

      // console.log(this.audioDuration );
      
    }else{
      console.log("error");
      
    }
  }
  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : num.toString();
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
