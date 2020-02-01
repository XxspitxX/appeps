import { Component, OnInit, ViewChild , } from '@angular/core';
import { AgendarCitaService } from '../../../Services/agendar-cita.service';
import  *  as  data  from  '../../../../assets/json/usuario.json';
import  *  as  dates  from  '../../../../assets/json/sucursales.json';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule} from '@angular/forms';
import {Cita} from '../../../Models/cita'
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  mycontrol = new FormControl();


  Usuario : any = (data as any).default;
  Sucursales : any = (dates as any).default;
  cita = new Cita('', '' , true);
  constructor(private service: AgendarCitaService) { 
   
    
  }
 
  ngOnInit() {
    console.log(data);
   
  
  }

  onSubmit(){
  this.service.enroll(this.cita).subscribe(
   data => console.log('Success', data),
   error => console.error("error", error),

 )
}
 
}
