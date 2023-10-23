import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { ResearchListComponent } from './components/research-list/research-list.component';
import { ResearchDetailsComponent } from './components/research-details/research-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ResearchListComponent,
    ResearchDetailsComponent
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    SharedModule
  ]
})
export class ResearchModule { }
