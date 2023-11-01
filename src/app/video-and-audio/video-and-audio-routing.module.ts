import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoAudioComponent } from './components/video-audio/video-audio.component';

const routes: Routes = [
<<<<<<< HEAD
  // {path:'',component:VideoAudioComponent},
=======
  
>>>>>>> 79eefb153c9933f2d79217cb1a30a9450b59b663
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoAndAudioRoutingModule { 
  
}
