import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './components/cv/cv.component';

const routes: Routes = [
  {path:'',component:CVComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CVRoutingModule { }
