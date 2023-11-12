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
import { BlogDetailsCardComponent } from './components/blog-details-card/blog-details-card.component';
import { QatufCardComponent } from './components/qatuf-card/qatuf-card.component';
import { CvCardComponent } from './components/cv-card/cv-card.component';
import { PopUpCardComponent } from './components/pop-up-card/pop-up-card.component';
import { RamadanKareemIslamicBackgroundComponent } from './components/ramadan-kareem-islamic-background/ramadan-kareem-islamic-background.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { FatwaSectionComponent } from './components/fatwa-section/fatwa-section.component';
import { SelectFatwaComponent } from './components/select-fatwa/select-fatwa.component';
import { OfficeProjectsComponent } from './components/office-projects/office-projects.component';
import { ItemCarousalHomeComponent } from './components/item-carousal-home/item-carousal-home.component';
import { FatawaButtonCardComponent } from './components/FatawaCards/fatawa-button-card/fatawa-button-card.component';
import { FatawaQuestionCardComponent } from './components/FatawaCards/fatawa-question-card/fatawa-question-card.component';
import { FatawaPreferredCardComponent } from './components/FatawaCards/fatawa-preferred-card/fatawa-preferred-card.component';
import { FatwaCardComponent } from './components/FatawaCards/fatwa-card/fatwa-card.component';
import { FatwaAnswerCardComponent } from './components/FatawaCards/fatwa-answer-card/fatwa-answer-card.component';
import { FatawaQuickSearchCardComponent } from './components/FatawaCards/fatawa-quick-search-card/fatawa-quick-search-card.component';
import { ContactInformationSideCardComponent } from './components/contact-information-side-card/contact-information-side-card.component';
import { FatawaSectionComponent } from './components/FatawaCards/fatawa-section/fatawa-section.component';
import { LiteratureAndResearchComponent } from './components/literature-and-research/literature-and-research.component';
import { ItemCarousalHome2Component } from './components/item-carousal-home2/item-carousal-home2.component';
import { AudioAndVideoComponent } from './components/audio-and-video/audio-and-video.component';
import { ItemSectionComponent } from './components/item-section/item-section.component';
import { TvBroadcastProgrammesComponent } from './components/tv-broadcast-programmes/tv-broadcast-programmes.component';
import { ShareCardVideoComponent } from './components/share-card-video/share-card-video.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AudioCardComponent } from './components/audio-card/audio-card.component';
import { AudioComponent } from './components/audio/audio.component';
import { DialogVideoImageComponent } from './components/dialog-video-image/dialog-video-image.component';
import { CardLectureComponent } from './components/card-lecture/card-lecture.component';
import { FatawaCategoriesSectionComponent } from './components/FatawaCards/fatawa-categories-section/fatawa-categories-section.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReadMorePageItemsComponent } from './components/read-more-page-items/read-more-page-items.component';
import { ReadMoreCarouselCardComponent } from './components/read-more-carousel-card/read-more-carousel-card.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppLoaderInterceptor } from './core/interceptors/app-loader.interceptor';




@NgModule({
  declarations: [
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent,
    ProjectDetailsCardComponent,
    BlogDetailsCardComponent,
    BlogCardComponent,
    QatufCardComponent,
    CvCardComponent,
    PopUpCardComponent,
    RamadanKareemIslamicBackgroundComponent,
    BookViewComponent,
    FatwaSectionComponent,
    SelectFatwaComponent,
    OfficeProjectsComponent,
    ItemCarousalHomeComponent,
    FatawaButtonCardComponent,
    FatawaQuestionCardComponent,
    FatawaPreferredCardComponent,
    FatwaCardComponent,
    FatwaAnswerCardComponent,
    FatawaQuickSearchCardComponent,
    ContactInformationSideCardComponent,
    FatawaSectionComponent,
    LiteratureAndResearchComponent,
    ItemCarousalHome2Component,
    AudioAndVideoComponent,
    ItemSectionComponent,
    TvBroadcastProgrammesComponent,
    ShareCardVideoComponent,
    FooterComponent,
    NavbarComponent,
    AudioCardComponent,
    AudioComponent,
    DialogVideoImageComponent,
    CardLectureComponent,
    FatawaCategoriesSectionComponent,
    ReadMorePageItemsComponent,
    ReadMoreCarouselCardComponent,
    AppLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule,
    MatDialogModule,
    
  ],
  exports:[
    PaginationComponent,
    ProjectCardComponent,
    PageHeaderComponent,
    ProjectDetailsCardComponent,
    BlogCardComponent,
    BlogDetailsCardComponent,
    QatufCardComponent,
    CvCardComponent,
    PopUpCardComponent,
    FormsModule,
    BookViewComponent,
    RamadanKareemIslamicBackgroundComponent,
    FatwaSectionComponent,
    SelectFatwaComponent,
    OfficeProjectsComponent,
    FatawaButtonCardComponent,
    FatawaQuestionCardComponent,
    FatawaPreferredCardComponent,
    FatwaCardComponent,
    FatwaAnswerCardComponent,
    FatawaQuickSearchCardComponent,
    ContactInformationSideCardComponent,
    FatawaSectionComponent,
    LiteratureAndResearchComponent,
    AudioAndVideoComponent,
    TvBroadcastProgrammesComponent,
    FooterComponent,
    NavbarComponent,
    AudioCardComponent,
    AudioComponent,
    DialogVideoImageComponent,
    CardLectureComponent,
    FatawaCategoriesSectionComponent,
    ReadMorePageItemsComponent,
    ReadMoreCarouselCardComponent,
    AppLoaderComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppLoaderInterceptor,
      multi: true
    }
  ],
})
export class SharedModule { }
