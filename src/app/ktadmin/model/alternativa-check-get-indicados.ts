
export class AlternativaCheckGetIndicados {
    // public id: number;
    //public pergunta: string;
    public alternativa_id: number;
    // public processo: string;
    public checked:boolean;
    constructor(data:any){
        this.alternativa_id=data.alternativa_id;
        //this.pergunta=data.pergunta;
        // this.processo_id=data.processo_id;
        // this.processo=data.processo;
        this.checked=false;
    }
}