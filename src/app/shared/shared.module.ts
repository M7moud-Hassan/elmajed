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
    ContactInformationSideCardComponent
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
    ContactInformationSideCardComponent
  ]
})
export class SharedModule { }
