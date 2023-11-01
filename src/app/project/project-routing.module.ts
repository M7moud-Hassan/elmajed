import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'details/:slug',component:ProjectDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
