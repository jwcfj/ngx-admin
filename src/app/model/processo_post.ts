export class ProcessoPost {
    public nome: string;
    public descricao: string;

    constructor(data:any){
        this.nome=data.nome;
        this.descricao=data.descricao;
    }
}