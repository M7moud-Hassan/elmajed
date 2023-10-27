import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatawaComponent } from './components/fatawa/fatawa.component';
import { FatawaAdvancedSearchComponent } from './components/fatawa-advanced-search/fatawa-advanced-search.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';

const routes: Routes = [
  {path:'',component:FatawaComponent},
  {path:'search',component:FatawaAdvancedSearchComponent},
  {path:'send-question',component:SendQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatwaRoutingModule { }
