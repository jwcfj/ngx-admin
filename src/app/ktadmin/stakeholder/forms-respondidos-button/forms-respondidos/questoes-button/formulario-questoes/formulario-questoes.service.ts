import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
import { FormRespondido } from '../../../../../model/form-respondido';
import { Formulario } from '../../../../../model/formulario';
import { FormularioRespondidoPut } from '../../../../../model/formulario_respondido_put';

@Injectable({
  providedIn: 'root'
})
export class FormulariosQuestoesService {

  constructor(private http: HttpClient) { }

  getFormulario(nome:String): Observable<Formulario> {
    return this.http.get<Formulario>(`http://localhost:8080/formulario/nome/${nome}`);
  }

  updateFormulario(formulario_respondido:FormRespondido):Observable<any>{

    let formulario_respondido_put=new FormularioRespondidoPut(formulario_respondido);
    return this.http.put(`http://localhost:8080/resposta_de_formulario`,formulario_respondido_put);

  }
}
