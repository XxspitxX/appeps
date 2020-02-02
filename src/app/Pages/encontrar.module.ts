import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatDatepicker } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {CitasComponent } from './AsignarCitas/citas/citas.component'

import { HighchartsChartModule } from 'highcharts-angular';
import { SolicitudComponent } from './solicitud-medico/solicitud/solicitud.component';
import {SolicitudMedicoComponent} from './solicitud-medico/solicitud-medico.component';
import { CotizacionCirugiaComponent } from './cotizacion-cirugia/cotizacion-cirugia.component';
import { ConsultarMedicosComponent } from './consultar-medicos/consultar-medicos.component';



@NgModule({
  declarations: [
    CitasComponent,
    SolicitudComponent,
    SolicitudMedicoComponent,
    CotizacionCirugiaComponent,
    ConsultarMedicosComponent
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
