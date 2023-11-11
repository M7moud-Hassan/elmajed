import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatawaComponent } from './components/fatawa/fatawa.component';
import { FatawaAdvancedSearchComponent } from './components/fatawa-advanced-search/fatawa-advanced-search.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';
import { FatawaSearchResultComponent } from './components/fatawa-search-result/fatawa-search-result.component';
import { FatwaDetailsComponent } from './components/fatwa-details/fatwa-details.component';
import { RelatedQuestionsComponent } from './components/related-questions/related-questions.component';

const routes: Routes = [
  {path:'',component:FatawaComponent},
  {path:'search',component:FatawaAdvancedSearchComponent},
  {path:'send-question',component:SendQuestionComponent},
  {path:'search-result',component:FatawaSearchResultComponent},
  {path:'details/:data',component:FatwaDetailsComponent},
  {path:'related-questions/:id',component:RelatedQuestionsComponent},
  {path:'related-questions-keywords/:keyword',component:RelatedQuestionsComponent},
  {path:'related-questions-by-free-search/:search',component:RelatedQuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatwaRoutingModule { }
