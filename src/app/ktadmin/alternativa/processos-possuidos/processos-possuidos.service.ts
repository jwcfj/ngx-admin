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

  // getProcessosPossuidos(): Observable<Alternativa[]> {
  //    return this.http.get<Alternativa[]>('http://localhost:8080/alternativa?size=100&page=0').pipe(
  //         map((response:any) =>response.content));
  //  }

  // deleteAlternativa(id:number): Observable<any>{
  //   // return this.http.delete(`http://localhost:8080/alternativa/${id}`);
  // }

  // updateAlternativa(alternativa:Alternativa):Observable<any>{
  //   //  return this.http.put(`http://localhost:8080/alternativa`,alternativa);
  // }

  addAlternativa(alternativaPost:AlternativaPost):Observable<any>{
    return this.http.post<AlternativaKtadmin>(`http://localhost:8080/alternativa`,alternativaPost)
   }

   cadastrarProcessoPossuido(processoPossuidoPost:ProcessoPossuidoPost):Observable<any>{
    return this.http.post<ProcessoPossuido>(`http://localhost:8080/alternativa/possuir`,processoPossuidoPost)
   }
   
}
