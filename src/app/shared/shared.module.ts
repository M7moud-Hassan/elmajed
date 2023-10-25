import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared.routing.module';
import { ProjectDetailsCardComponent } from './components/project-details-card/project-details-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent,
    ProjectDetailsCardComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent,
    ProjectDetailsCardComponent,
    BlogCardComponent,
    FormsModule
  ]
})
export class SharedModule { }
