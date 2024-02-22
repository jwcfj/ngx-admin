export class FormularioRespondidoPut {
    id:                number;
    respostasQuestoes: RespostaQuestao[];

    constructor(data: any){
        this.id = data.id;
        this.respostasQuestoes = [];
        for (let i = 0; i < data.respostas_questoes.length; i++) {
            let respostaQuestao:RespostaQuestao=new RespostaQuestao();
            respostaQuestao.id=data.respostas_questoes[i].id;
            respostaQuestao.alternativa_id=data.respostas_questoes[i].alternativa_id;
            this.respostasQuestoes.push(respostaQuestao);
        }
        console.log(this);
    }
}

export class RespostaQuestao {
    id:             number;
    alternativa_id: number;
}