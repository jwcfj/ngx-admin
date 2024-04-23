import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Alternativa } from '../model/alternativa';
import { map } from 'rxjs/operators';
import { AlternativaPost } from '../../model/alternativa_post';
import { Alternativa } from '../../model/alternativa';
import { ProcessoPossuidoPost } from '../../model/processo_possuido_post';
import { ProcessoPossuido } from '../../model/processo_possuido';
import { AlternativaKtadmin } from '../../model/alternativa_ktadmin';
// // import { AlternativaPost } from '../model/alternativa_post';


@Injectable({
  providedIn: 'root'
})
export class ProcessosPssuidosService {

  constructor(private http: HttpClient) { }

   getProcessosPossuidos(alternativa_id:number): Observable<ProcessoPossuido[]> {
      return this.http.get<ProcessoPossuido[]>(`http://localhost:8080/alternativa/${alternativa_id}/processos?size=100&page=0`).pipe(
           map((response:any) =>response.content));
    }

  deleteProcessoPossuido(id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/alternativa/processo-possuido/${id}`);
  }

   cadastrarProcessoPossuido(processoPossuidoPost:ProcessoPossuidoPost):Observable<any>{
    return this.http.post<ProcessoPossuido>(`http://localhost:8080/alternativa/possuir`,processoPossuidoPost)
   }
   
}
