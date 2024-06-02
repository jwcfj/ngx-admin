export class StakeholderPost {
    public filiacao: string;
    public email: string;
    public nome: string;
    public cpf: string;
    public senioridade: string;
    public cargo: string;

    constructor(data:any){
        this.filiacao=data.filiacao;
        this.email=data.email;
        this.nome=data.nome;
        this.cpf=data.cpf;
        this.senioridade=data.senioridade;
        this.cargo=data.cargo;
    }
}