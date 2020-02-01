import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule,
   MatDividerModule,
    MatCardModule,
     MatPaginatorModule, 
     MatTableModule,
     MatDatepickerModule,
     MatInputModule,
     MatNativeDateModule ,
     MatFormFieldModule,
     MatAutocompleteModule,
     MatSelectModule,
     MatButtonModule,
     MatSnackBarModule}
      from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CitasComponent } from '../../Pages/AsignarCitas/citas/citas.component';
import { SolicitudMedicoComponent } from 'src/app/Pages/solicitud-medico/solicitud-medico.component';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DefaultComponent,
    CitasComponent,
    
    SolicitudMedicoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
     FormsModule,
     HttpClientModule,
     MatSnackBarModule
  ],
  providers: [
    CitasComponent
  ]
})
export class DefaultModule { }
