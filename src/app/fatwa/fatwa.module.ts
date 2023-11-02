import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatwaRoutingModule } from './fatwa-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FatawaComponent } from './components/fatawa/fatawa.component';
import { FatawaAdvancedSearchComponent } from './components/fatawa-advanced-search/fatawa-advanced-search.component';
import { FatawaSearchResultComponent } from './components/fatawa-search-result/fatawa-search-result.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FatwaDetailsComponent } from './components/fatwa-details/fatwa-details.component';
import { RelatedQuestionsComponent } from './components/related-questions/related-questions.component';


@NgModule({
  declarations: [
    FatawaComponent,
    FatawaAdvancedSearchComponent,
    FatawaSearchResultComponent,
    SendQuestionComponent,
    FatwaDetailsComponent,
    RelatedQuestionsComponent
  ],
  imports: [
    CommonModule,
    FatwaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FatwaModule { }
