import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stakeholder } from '../model/stakeholder';
import { map } from 'rxjs/operators';
import { StakeholderPost } from '../model/stakeholder_post';

@Injectable({providedIn: 'root'})
export class StakeholderService {

    constructor(private http: HttpClient) {}


    getStakeholders(): Observable<Stakeholder[]> {
        return this.http.get<Stakeholder[]>('http://localhost:8080/stakeholder?size=10&page=0').pipe(
            map((response:any) =>response.content));
            /*map((response:any)=> {
                const stakeholders: Stakeholder[] = response.content.map((stakeholderData:any) => new Stakeholder(stakeholderData));
                return stakeholders;
            } )
        );*/
    }

    deleteStakeholder(id:number): Observable<any>{
        return this.http.delete(`http://localhost:8080/stakeholder/${id}`);
    }

    updateStakeholder(stakeholder:Stakeholder):Observable<any>{
        console.log(stakeholder);
        return this.http.put(`http://localhost:8080/stakeholder`,stakeholder);
    }

    addStakeholder(stakeholderPost:StakeholderPost):Observable<any>{
        return this.http.post(`http://localhost:8080/stakeholder`,stakeholderPost)
    }
}