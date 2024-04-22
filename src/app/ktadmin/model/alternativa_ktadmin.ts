
export class AlternativaKtadmin {
    public alternativa_id: number;
    public pergunta: string;
    //public processo_id: number;
    //public processo: string;
    constructor(data:any){
        this.alternativa_id=data.alternativa_id;
        this.pergunta=data.pergunta;
        // this.processo_id=data.processo_id;
        // this.processo=data.processo;
    }
}