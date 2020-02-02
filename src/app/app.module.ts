import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';

 import {  MatDatepickerModule, MatNativeDateModule } from '@angular/material';
 import {NgbModule, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
 import { FormsModule } from '@angular/forms';



 
@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    
    MatDatepickerModule, MatNativeDateModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
