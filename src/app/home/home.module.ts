import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookViewComponent } from '../shared/components/book-view/book-view.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../layout/navbar/navbar.component';
// import { FatwaSectionComponent } from './components/fatwa-section/fatwa-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    // FatwaSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // NgModule,
    SharedModule
  ]
})
export class HomeModule { }
