import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RamadanKareemIslamicBackgroundComponent } from './components/ramadan-kareem-islamic-background/ramadan-kareem-islamic-background.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { FatwaSectionComponent } from './components/fatwa-section/fatwa-section.component';
import { SelectFatwaComponent } from './components/select-fatwa/select-fatwa.component';
import { OfficeProjectsComponent } from './components/office-projects/office-projects.component';
import { ItemCarousalHomeComponent } from './components/item-carousal-home/item-carousal-home.component';
import { LiteratureAndResearchComponent } from './components/literature-and-research/literature-and-research.component';
import { ItemCarousalHome2Component } from './components/item-carousal-home2/item-carousal-home2.component';
import { AudioAndVideoComponent } from './components/audio-and-video/audio-and-video.component';
import { ItemSectionComponent } from './components/item-section/item-section.component';
import { TvBroadcastProgrammesComponent } from './components/tv-broadcast-programmes/tv-broadcast-programmes.component';
import { ShareCardVideoComponent } from './components/share-card-video/share-card-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaginationComponent,
    RamadanKareemIslamicBackgroundComponent,
    BookViewComponent,
    FatwaSectionComponent,
    SelectFatwaComponent,
    OfficeProjectsComponent,
    ItemCarousalHomeComponent,
    LiteratureAndResearchComponent,
    ItemCarousalHome2Component,
    AudioAndVideoComponent,
    ItemSectionComponent,
    TvBroadcastProgrammesComponent,
    ShareCardVideoComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PaginationComponent,
    BookViewComponent,
    RamadanKareemIslamicBackgroundComponent,
    FatwaSectionComponent,
    SelectFatwaComponent,
    OfficeProjectsComponent,
    LiteratureAndResearchComponent,
    AudioAndVideoComponent,
    TvBroadcastProgrammesComponent,
    FooterComponent,
    NavbarComponent
    
  ]
})
export class SharedModule { }
