
export class AlternativaCheck {
    public pergunta: string;
    public alternativa_id: number;
    public checked:boolean;
    constructor(data:any){
        this.alternativa_id=data.alternativa_id;
        this.pergunta=data.pergunta;
        this.checked=false;
    }
}