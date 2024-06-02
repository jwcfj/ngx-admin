import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Processo } from '../../model/processo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProcessoPost } from '../../model/processo_post';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  constructor(private http: HttpClient) { }

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>('http://localhost:8080/processo?size=100&page=0').pipe(
        map((response:any) =>
        
        response.content
        
        ));
  }

  deleteProcesso(id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/processo/${id}`);
}

  updateProcesso(processo:Processo):Observable<any>{
      return this.http.put(`http://localhost:8080/processo`,processo);
  }

  addProcesso(processoPost:ProcessoPost):Observable<any>{
    return this.http.post(`http://localhost:8080/processo`,processoPost)
}
}
