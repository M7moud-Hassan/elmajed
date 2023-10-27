import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RamadanKareemIslamicBackgroundComponent } from './components/ramadan-kareem-islamic-background/ramadan-kareem-islamic-background.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { FatwaSectionComponent } from './components/fatwa-section/fatwa-section.component';
import { SelectFatwaComponent } from './components/select-fatwa/select-fatwa.component';
import { OfficeProjectsComponent } from './components/office-projects/office-projects.component';
import { ItemCarousalHomeComponent } from './components/item-carousal-home/item-carousal-home.component';



@NgModule({
  declarations: [
    PaginationComponent,
    RamadanKareemIslamicBackgroundComponent,
    BookViewComponent,
    FatwaSectionComponent,
    SelectFatwaComponent,
    OfficeProjectsComponent,
    ItemCarousalHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationComponent,
    BookViewComponent,
    RamadanKareemIslamicBackgroundComponent,
    FatwaSectionComponent,
    SelectFatwaComponent,
    OfficeProjectsComponent
  ]
})
export class SharedModule { }
