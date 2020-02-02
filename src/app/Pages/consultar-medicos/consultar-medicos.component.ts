import { Component, OnInit, ViewChild } from '@angular/core';
import { EspcialistaService } from 'src/app/Services/espcialista.service';
import  *  as  espc  from  '../../../assets/json/Especialista.json';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-consultar-medicos',
  templateUrl: './consultar-medicos.component.html',
  styleUrls: ['./consultar-medicos.component.scss']
})
export class ConsultarMedicosComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Especialidad', 'Telefono', 'Sucursal'];
 

   Usuario : any = (espc as any).default;

  constructor() { }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit()  {
    this.dataSource.paginator = this.paginator;
   
  }
  dataSource = new MatTableDataSource(this.Usuario);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
