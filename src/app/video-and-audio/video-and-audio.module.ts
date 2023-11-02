import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoAndAudioRoutingModule } from './video-and-audio-routing.module';
import { VideoAudioComponent } from './components/video-audio/video-audio.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesContentComponent } from './components/courses-content/courses-content.component';
// import { AudioCardComponent } from '../shared/components/audio-card/audio-card.component';


@NgModule({
  declarations: [
    VideoAudioComponent,
    CoursesContentComponent
  ],
  imports: [
    CommonModule,
    VideoAndAudioRoutingModule,
    SharedModule,
    FormsModule  ,
    ReactiveFormsModule   
  ]
})
export class VideoAndAudioModule { }
