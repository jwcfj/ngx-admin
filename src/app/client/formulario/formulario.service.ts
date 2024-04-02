import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlternativaCheck } from '../../ktadmin/model/alternativa-check';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }

  getAlternativas(): Observable<AlternativaCheck[]> {
    return this.http.get<any>('http://localhost:8080/alternativa?size=100&page=0').pipe(
        map(response => {
          const alternativas: AlternativaCheck[] = response.content.map((data: any) => new AlternativaCheck(data));
          alternativas.forEach(alternativa => alternativa.checked = false);
          return alternativas;
        })
      );
  }

  getIndicados(teste:any): Observable<any>{
    const body =  new HttpParams().set('teste', JSON.stringify(teste));

    return this.http.post<any>('http://localhost:8080/processo/indicados',teste).pipe(
      map(response => {
        console.log(response)
        return response;
      }
    ));
  }

}
