import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import {CitasComponent } from './Pages/AsignarCitas/citas/citas.component';

import { SolicitudMedicoComponent } from './Pages/solicitud-medico/solicitud-medico.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: CitasComponent
  }, {
    path: 'SolicitarMedico',
    component: SolicitudMedicoComponent
  },

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
