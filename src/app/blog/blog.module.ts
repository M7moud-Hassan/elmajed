import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
