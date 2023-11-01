import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  {path:'',component:BlogListComponent},
  {path:'details/:slug',component:BlogDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
