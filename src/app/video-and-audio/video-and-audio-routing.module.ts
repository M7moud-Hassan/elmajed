import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoAudioComponent } from './components/video-audio/video-audio.component';
import { CoursesContentComponent } from './components/courses-content/courses-content.component';

const routes: Routes = [
  {path:'',component:VideoAudioComponent},
  {path:'courses-content',component:CoursesContentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoAndAudioRoutingModule { 
  
}
