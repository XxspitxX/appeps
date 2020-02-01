import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatDatepicker } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {CitasComponent } from './AsignarCitas/citas/citas.component'

import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    CitasComponent
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatDatepicker
    
  ],
  exports: [
    CitasComponent
  ]
})
export class SharedModule { }
