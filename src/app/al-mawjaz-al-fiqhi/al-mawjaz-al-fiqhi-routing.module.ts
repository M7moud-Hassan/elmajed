import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElmowjazListComponent } from './components/elmowjaz-list/elmowjaz-list.component';
import { ElmowjazDetailsComponent } from './components/elmowjaz-details/elmowjaz-details.component';

const routes: Routes = [
  {path:'',component:ElmowjazListComponent},
  {path:'details/:slug',component:ElmowjazDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlMawjazAlFiqhiRoutingModule { }
