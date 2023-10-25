import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlMawjazAlFiqhiRoutingModule } from './al-mawjaz-al-fiqhi-routing.module';
import { ElmowjazListComponent } from './components/elmowjaz-list/elmowjaz-list.component';
import { ElmowjazDetailsComponent } from './components/elmowjaz-details/elmowjaz-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ElmowjazListComponent,
    ElmowjazDetailsComponent
  ],
  imports: [
    CommonModule,
    AlMawjazAlFiqhiRoutingModule,
    SharedModule
  ]
})
export class AlMawjazAlFiqhiModule { }
