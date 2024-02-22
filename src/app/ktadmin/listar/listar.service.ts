import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ListarService {

    constructor(private http: HttpClient) {}


    getStakeholders(): Observable<any> {
        return this.http.get('http://localhost:8080/stakeholder?size=10&page=0');
      }
}