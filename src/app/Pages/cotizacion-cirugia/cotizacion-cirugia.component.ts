import { Component, OnInit } from '@angular/core';
import { Tipo } from '../solicitud-medico/solicitud/solicitud.component';
import  *  as  Proceso  from  '../../../assets/json/cirugias.json';

@Component({
  selector: 'app-cotizacion-cirugia',
  templateUrl: './cotizacion-cirugia.component.html',
  styleUrls: ['./cotizacion-cirugia.component.scss']
})
export class CotizacionCirugiaComponent implements OnInit {
  mainCategory = {
    title: 'abc',
    id: 1
  };
  subcategory = {
    title: 'xxx',
    parentId: 1
  };

  mainGroups = [
    {
      title: 'abc',
      id: 1
    },
    {
      title: 'def',
      id: 2
    }
  ]

  subCategories = [
    {
      title: 'xxx',
      parentId: 1
    },
    {
      title: 'yyy',
      parentId: 1
    },
    {
      title: 'zzz',
      parentId: 2
    }
  ]
  constructor() { }
  tipo: Tipo[] = [
    {value: 'TI', viewValue:'TI'},
    {value: 'CC',viewValue:'CC'},
    {value: 'CE',viewValue:'CE'},
    {value: 'Pasaporte',viewValue:'Pasaporte'}
  ];

 filterSubById(id) {
    return this.subCategories.filter(item => item.parentId === id);
}
  ngOnInit() {}
}
