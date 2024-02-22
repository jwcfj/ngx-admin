import { FormRespondido } from "./form-respondido";

export class Stakeholder {
    public id: number;
    public filiacao: string;
    public email: string;
    public nome: string;
    public cpf: string;
    public senioridade: string;
    public cargo: string;
    public formulariosRespondidos: FormRespondido[]; 
    constructor(data:any){
        this.id=data.id;
        this.filiacao=data.filiacao;
        this.email=data.email;
        this.nome=data.nome;
        this.cpf=data.cpf;
        this.senioridade=data.senioridade;
        this.cargo=data.cargo;
        this.formulariosRespondidos = data.formulariosRespondidos;
    }
}