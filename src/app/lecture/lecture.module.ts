import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LectureRoutingModule } from './lecture-routing.module';
import { LecturesComponent } from './components/lectures/lectures.component';
import { SharedModule } from '../shared/shared.module';
import { LecturePageComponent } from './components/lecture-page/lecture-page.component';


@NgModule({
  declarations: [
    LecturesComponent,
    LecturePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LectureRoutingModule,
  ]
})
export class LectureModule { }
