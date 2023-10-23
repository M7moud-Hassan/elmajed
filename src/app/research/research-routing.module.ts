import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchListComponent } from './components/research-list/research-list.component';
import { ResearchDetailsComponent } from './components/research-details/research-details.component';

const routes: Routes = [
  {path:'',component:ResearchListComponent},
  {path:'details/:id',component:ResearchDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResearchRoutingModule { }
