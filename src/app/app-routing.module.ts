import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppLoaderComponent } from './shared/components/app-loader/app-loader.component';
import { TvPageComponent } from './shared/components/tv-page/tv-page.component';
import { HomeComponent } from './home/components/home/home.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'loader',component:AppLoaderComponent},
  {path:'',component:HomeComponent},
  {path:'',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'',component:MainLayoutComponent,children:[
    {path:'',component:NavbarComponent},
    {path:'fatawa',loadChildren:()=>import('./fatwa/fatwa.module').then(m=>m.FatwaModule)},
    {path:'project',loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule)},
    {path:'research',loadChildren:()=>import('./research/research.module').then(m=>m.ResearchModule)},
    {path:'video-audio',loadChildren:()=>import('./video-and-audio/video-and-audio.module').then(m=>m.VideoAndAudioModule)},
    {path:'lectures',loadChildren:()=>import('./lecture/lecture.module').then(m=>m.LectureModule)},
    {path:'cv',loadChildren:()=>import('./cv/cv.module').then(m=>m.CVModule)},
    {path:'contact-us',loadChildren:()=>import('./contact-us/contact-us.module').then(m=>m.ContactUsModule)},
    {path:'blogs',loadChildren:()=>import('./blog/blog.module').then(m=>m.BlogModule)},
    {path:'al-mawjaz-al-fiqhi',loadChildren:()=>import('./al-mawjaz-al-fiqhi/al-mawjaz-al-fiqhi.module').then(m=>m.AlMawjazAlFiqhiModule)},
    {path:'qatuf',loadChildren:()=>import('./qatuf/qatuf.module').then(m=>m.QatufModule)},
    {path:'tv-page',component:TvPageComponent},
    // {path:'fatwa',component:AdminComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
