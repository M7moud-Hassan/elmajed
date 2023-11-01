import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoAudioComponent } from './components/video-audio/video-audio.component';

const routes: Routes = [
  // {path:'',component:VideoAudioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoAndAudioRoutingModule { 
  
}
