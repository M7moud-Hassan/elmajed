import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
