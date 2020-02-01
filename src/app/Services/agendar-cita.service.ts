import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { HttpClient} from '@angular/common/http';
import { Cita } from '../Models/cita';
@Injectable({
  providedIn: 'root'
})
export class AgendarCitaService {
  _url = 'http://localhost:3000/citas';
  constructor(private _http : HttpClient) { }

  enroll(cita: Cita){
    return this._http.post<any>(this._url, cita);
  }
  
}
