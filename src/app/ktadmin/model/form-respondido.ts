export class FormRespondido {
    public id: number;
    public data_criacao: string;
    public nomeFormulario: string;
    public nomeStakeholder: string;
    public respostas_questoes:{
        id:number,
        pergunta:string,
        alternativa_id:number}[]

    constructor(data:any){
        this.id=data.id;
        this.data_criacao=data.data_criacao
        this.nomeFormulario=data.nomeFormulario
        this.nomeStakeholder=data.nomeStakeholder
        this.respostas_questoes=data.respostas_questoes
    }
}