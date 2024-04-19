export class AlternativaPost {
    public pergunta: string;
    public processo: string;

    constructor(data:AlternativaPost){
        this.pergunta=data.pergunta;
        this.processo=data.processo;
    }
}