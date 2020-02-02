import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';

import { RouterModule } from '@angular/router';
import {CdkStepperModule} from '@angular/cdk/stepper';

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
     MatSnackBarModule,
     MatCheckboxModule,
     MatStepperModule,
     MatRadioModule}
      from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CitasComponent } from '../../Pages/AsignarCitas/citas/citas.component';
import { SolicitudMedicoComponent } from 'src/app/Pages/solicitud-medico/solicitud-medico.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SolicitudComponent } from '../../Pages/solicitud-medico/solicitud/solicitud.component';

@NgModule({
  declarations: [
    DefaultComponent,
    CitasComponent,
    SolicitudMedicoComponent,
    SolicitudComponent
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
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    CdkStepperModule,
    
     FormsModule,
     HttpClientModule,
     MatSnackBarModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot()
  ],
  providers: [
    CitasComponent
  ]
})
export class DefaultModule { }
