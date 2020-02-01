import { Component, OnInit, ViewChild , } from '@angular/core';
import { AgendarCitaService } from '../../../Services/agendar-cita.service';
import  *  as  data  from  '../../../../assets/json/usuario.json';
import  *  as  dates  from  '../../../../assets/json/sucursales.json';
import  *  as  medicos  from  '../../../../assets/json/medicos.json';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormsModule} from '@angular/forms';
import {Cita} from '../../../Models/cita';
import {Medico} from '../../../Models/medico'
import { filter } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AnimationDurations } from '@angular/material';
import { Config, $ } from 'protractor';
@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  mycontrol = new FormControl();
  durationInSeconds = 5;

  Usuario : any = (data as any).default;
  Medico : any = (medicos as any).default;
  Sucursales : any = (dates as any).default;
  hora = this.Medico.hora;
  
  cita = new Cita(1,'','',true);
  medico = new Medico('', '' , '','');
  
  constructor(private service: AgendarCitaService,
    private _snackBar: MatSnackBar) { 
    
    this.service.getmedicos().subscribe(
      data => console.log("succes", data)
    )
   
    
    
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  

  ngOnInit() {
   this.service.citaget().subscribe(data => console.log(data) )
  
  }
  
  onSubmit(){
  this.service.enroll(this.cita).subscribe(
   data => console.log("succes",data),
   error => console.error(this.openSnackBar("Error", "404"), error),

 )

 
}
 
}
