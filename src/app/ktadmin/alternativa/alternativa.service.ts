import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alternativa } from '../model/alternativa';
import { map } from 'rxjs/operators';
import { AlternativaPost } from '../model/alternativa_post';


@Injectable({
  providedIn: 'root'
})
export class AlternativaService {

  constructor(private http: HttpClient) { }

  getAlternativas(): Observable<Alternativa[]> {
    return this.http.get<Alternativa[]>('http://localhost:8080/alternativa?size=100&page=0').pipe(
        map((response:any) =>response.content));
        /*map((response:any)=> {
            const stakeholders: Stakeholder[] = response.content.map((stakeholderData:any) => new Stakeholder(stakeholderData));
            return stakeholders;
        } )
    );*/
}

deleteAlternativa(id:number): Observable<any>{
    return this.http.delete(`http://localhost:8080/alternativa/${id}`);
}

updateAlternativa(alternativa:Alternativa):Observable<any>{
    console.log(alternativa);
    return this.http.put(`http://localhost:8080/alternativa`,alternativa);
}

addAlternativa(alternativaPost:AlternativaPost):Observable<any>{
  console.log(alternativaPost)
    return this.http.post(`http://localhost:8080/alternativa`,alternativaPost)
}
}
