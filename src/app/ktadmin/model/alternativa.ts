
export class Alternativa {
    public alternativa_id: number;
    public pergunta: string;
    constructor(data:any){
        this.alternativa_id=data.alternativa_id;
        this.pergunta=data.pergunta;
    }
}