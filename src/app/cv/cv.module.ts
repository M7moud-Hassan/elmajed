import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CVRoutingModule } from './cv-routing.module';
import { CVComponent } from './components/cv/cv.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CVComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CVRoutingModule
  ]
})
export class CVModule { }
