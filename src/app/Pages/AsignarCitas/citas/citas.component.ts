import { Component, OnInit, ViewChild , } from '@angular/core';
import { AgendarCitaService } from '../../../Services/agendar-cita.service';
import  *  as  data  from  '../../../../assets/json/usuario.json';
import  *  as  dates  from  '../../../../assets/json/sucursales.json';
import  *  as  medicos  from  '../../../../assets/json/medicos.json';
import  *  as  espc  from  '../../../../assets/json/Especialidad.json';
import { FormControl, FormsModule, NgForm} from '@angular/forms';
import {Cita} from '../../../Models/cita';
import {Medico} from '../../../Models/medico'
import {MatSnackBar} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
  
})
export class CitasComponent implements OnInit {


  mycontrol = new FormControl();
  durationInSeconds = 5;
  // Traer JSON para mostrar el Vista
  Usuario : any = (data as any).default;
  Medico : any = (medicos as any).default;
  Sucursales : any = (dates as any).default;
  Especialidades : any = (espc as any).default;
  hora = this.Medico.hora;
  cita = new Cita('','','','','', true);
  medico = new Medico('', '' , '','');
  
  constructor(private service: AgendarCitaService,
    private _snackBar: MatSnackBar,
    private toastr: ToastrService) { 
    
    this.service.getmedicos().subscribe(
      data => console.log("succes", data)
    )
  }
  ngOnInit() {}
  
  onMostrar(){
    document.getElementById('mostrar').hidden = false;
    
   }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(cita : NgForm, medic : NgForm){
     this.service.enroll(this.cita).subscribe(
      data => console.log("succes",data),
        error => console.error(this.openSnackBar("Error", "404"), error),);
      let mostrarhora = document.getElementById('mostrar');
      mostrarhora.style.display = "none";
      this.toastr.success("Cita Agendada");
      cita.resetForm();
      medic.resetForm();

}
 
}
