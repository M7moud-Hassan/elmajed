import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared.routing.module';



@NgModule({
  declarations: [
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent,
    FormsModule
  ]
})
export class SharedModule { }
