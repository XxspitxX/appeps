import { Component, OnInit } from '@angular/core';
import { Tipo } from '../solicitud-medico/solicitud/solicitud.component';
import  *  as  Proceso  from  '../../../assets/json/cirugias.json';
import { Cotizacion } from 'src/app/Models/cotizacion';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cotizacion-cirugia',
  templateUrl: './cotizacion-cirugia.component.html',
  styleUrls: ['./cotizacion-cirugia.component.scss']
})
export class CotizacionCirugiaComponent implements OnInit {
  mainCategory = [{
    title: 'Neurocirugía',
    id: 1,  
  },
  {
    title: 'Ortopedia y Traumatología',
    id: 2,  
  },
  {
    title: 'Cardiovascular',
    id: 3,  
  },
  {
    title: 'Cirugía General',
    id: 4,  
  },
  {
    title: 'Urología',
    id: 4,  
  },
  {
    title: 'Ginecología',
    id: 5,
  }
]
  ;
  subcategory = {
    title: 'xxx',
    parentId: 1
  };

  mainGroups = [
    {
      title: 'Neurocirugía',
      id: 1
    },
    {
      title: 'Ortopedia y Traumatología',
      id: 2
    },
    {
      title: 'Cardiovascular',
      id: 3
    },
    {
      title: 'Cirugía General',
      id: 4
    },
    {
      title: 'Urología',
      id: 5
    },
    {
      title: 'Ginecología',
      id: 6
    }

  ]

  subCategories = [
    {
      title: 'Tumores Cerebrales',
      parentId: 1
    },
    {
      title: 'Hematomas Cerebrales',
      parentId: 1
    },
    {
      title: 'Aneurismas',
      parentId: 1
    },

    {
      title: 'Cirugía de mano y pie',
      parentId: 2
    },
    {
      title: 'Osteosíntesis para tratamiento de fracturas esqueléticas',
      parentId: 2
    },
    {
      title: 'Cirugías de trauma y deformidades en columna',
      parentId: 2
    },

    {
      title: 'Revascularización miocárdica con y sin circulación extracorpórea',
      parentId: 3
    },
    {
      title: 'Cambios valvulares',
      parentId: 3
    },
    {
      title: 'Aneurismas con injertos',
      parentId: 3
    },
    {
      title: 'Corrección de estenosis pulmonares',
      parentId: 3
    },
    {
      title: 'Corrección defectos congénitos cardíacos en niños',
      parentId: 3
    },
    {
      title: 'Resecciones intestinales',
      parentId: 4
    },
    {
      title: 'Tiroidectomías',
      parentId: 4
    },
    {
      title: 'Cirugía variada para tumores en diversas localizaciones',
      parentId: 4
    },
    {
      title: 'Procedimientos endoscópicos para cirugía antirreflujo y cirugía de obesidad',
      parentId: 4
    },
    {
      title: 'Nefrectomía',
      parentId: 5
    },
    {
      title: 'Recanalización de canal deferente',
      parentId: 5
    },
    {
      title: 'Histerectomía abdominal o vaginal',
      parentId: 6
    },
    {
      title: 'Quiste de ovario',
      parentId: 6
    },
    {
      title: 'Protocolo de ovario (Cirugía de cáncer)',
      parentId: 6
    },
    {
      title: 'Microcirugía tubárica y cirugías de fertilidad',
      parentId: 6
    }


  ]
  constructor(private toast: ToastrService) { }
  datos = new Cotizacion('', '' , '','','','','','','','');
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


  onSubmit(datos: NgForm, mainCategory : NgForm, subCategories: NgForm){
    this.toast.success("Cotización Enviada se envia información al correo electronico");
    datos.resetForm();
    mainCategory.resetForm();
    subCategories.resetForm();
  }
}
