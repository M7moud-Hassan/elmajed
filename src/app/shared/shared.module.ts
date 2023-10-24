import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
