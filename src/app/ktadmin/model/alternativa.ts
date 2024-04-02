
export class Alternativa {
    public id: number;
    public pergunta: string;
    public processo_id: number;
    public processo: string;
    constructor(data:any){
        this.id=data.id;
        this.pergunta=data.pergunta;
        this.processo_id=data.processo_id;
        this.processo=data.processo;
    }
}