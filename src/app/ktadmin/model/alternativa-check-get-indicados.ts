
export class AlternativaCheckGetIndicados {
    public alternativa_id: number;
    public checked:boolean;
    constructor(data:any){
        this.alternativa_id=data.alternativa_id;
        this.checked=false;
    }
}