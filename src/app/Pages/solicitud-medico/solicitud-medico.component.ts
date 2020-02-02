import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/Models/solicitud';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitud-medico',
  templateUrl: './solicitud-medico.component.html',
  styleUrls: ['./solicitud-medico.component.scss']
})
export class SolicitudMedicoComponent implements OnInit {

  constructor() { }
  cita = new Solicitud(true,true,true);
  ngOnInit() {
   
  }

   
}
