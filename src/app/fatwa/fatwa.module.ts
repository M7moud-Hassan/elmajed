import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FatwaRoutingModule } from './fatwa-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FatawaComponent } from './components/fatawa/fatawa.component';
import { FatawaAdvancedSearchComponent } from './components/fatawa-advanced-search/fatawa-advanced-search.component';
import { FatawaSearchResultComponent } from './components/fatawa-search-result/fatawa-search-result.component';
import { SendQuestionComponent } from './components/send-question/send-question.component';


@NgModule({
  declarations: [
    FatawaComponent,
    FatawaAdvancedSearchComponent,
    FatawaSearchResultComponent,
    SendQuestionComponent
  ],
  imports: [
    CommonModule,
    FatwaRoutingModule,
    SharedModule
  ]
})
export class FatwaModule { }
