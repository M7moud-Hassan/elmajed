import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QatufListComponent } from './components/qatuf-list/qatuf-list.component';

const routes: Routes = [
  {path:'',component:QatufListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QatufRoutingModule { }
