import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { FormRespondido } from '../../../model/form-respondido';

@Injectable({
  providedIn: 'root'
})
export class FormsRespondidosService {

  constructor(private http: HttpClient) { }

  getFormsRespondidos(): Observable<FormRespondido[]> {
    return this.http.get<FormRespondido[]>('http://localhost:8080/resposta_de_formulario?size=2&page=0');
  }
}
