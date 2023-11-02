import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturesComponent } from './components/lectures/lectures.component';
import { LecturePageComponent } from './components/lecture-page/lecture-page.component';

const routes: Routes = [
  {path:'',component:LecturesComponent},
  {path:'lecture-page',component:LecturePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LectureRoutingModule { }
