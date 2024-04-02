export class AlternativaPost {
    public pergunta: string;
    public processo: string;

    constructor(data:AlternativaPost){
        console.log(data)
        this.pergunta=data.pergunta;
        this.processo=data.processo;
    }
}