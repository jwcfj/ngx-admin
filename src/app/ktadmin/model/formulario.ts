export class Formulario {
    id:       number;
    nome:     string;
    questoes: Questao[];    
}

export class Questao {
    id:           number;
    pergunta:     string;
    alternativas: Alternativa[];
}

class Alternativa {
    id:          number;
    alternativa: string;
    processo_id: number;
}

