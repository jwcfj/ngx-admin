
export class Processo {
    public id: number;
    public nome: string;
    public descricao: number;
    constructor(data:any){
        this.id=data.id;
        this.nome=data.nome;
        this.descricao=data.descricao;
    }
}