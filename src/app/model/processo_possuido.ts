
export class ProcessoPossuido {
    public possui_id: number;
    public processo_id: number;
    public nome_processo: string;
    constructor(data:any){
        this.possui_id=data.possui_id;
        this.processo_id=data.processo_id;
        this.nome_processo=data.nome_processo;
    }
}