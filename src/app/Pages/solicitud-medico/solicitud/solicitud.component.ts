import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/Models/formulario';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

export interface Tipo{
  value : string;
  viewValue : string;
  
}
@Component({
 
 
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class SolicitudComponent implements OnInit {
  isLinear = true;
  datos = new Formulario('', '' , '','','','','','','');
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;
  Efectivo : [{
    "Pago en Efectivo"
  }]
  constructor(private _formBuilder: FormBuilder, private toastr: ToastrService) { }
  tipo: Tipo[] = [
    {value: 'TI', viewValue:'TI'},
    {value: 'CC',viewValue:'CC'},
    {value: 'CE',viewValue:'CE'},
    {value: 'Pasaporte',viewValue:'Pasaporte'}
  ];
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit(data){
    this.toastr.success("Su solicitud ha sido enviada");
  }

  radioChange(){
    
  let obt =  document.getElementById('alert');
  obt.style.display = "block";
  }

}
