import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QatufRoutingModule } from './qatuf-routing.module';
import { QatufListComponent } from './components/qatuf-list/qatuf-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    QatufListComponent
  ],
  imports: [
    CommonModule,
    QatufRoutingModule,
    SharedModule
  ]
})
export class QatufModule { }
