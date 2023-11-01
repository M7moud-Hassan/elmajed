import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoAndAudioRoutingModule } from './video-and-audio-routing.module';
import { VideoAudioComponent } from './components/video-audio/video-audio.component';


@NgModule({
  declarations: [
    VideoAudioComponent
  ],
  imports: [
    CommonModule,
    VideoAndAudioRoutingModule
  ]
})
export class VideoAndAudioModule { }
