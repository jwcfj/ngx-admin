
export class ProcessoPossuidoPost {
    public processo_id: number;
    public alternativa_id: number;
    constructor(data:any){
        this.alternativa_id=data.alternativa_id;
        this.processo_id=data.processo_id;
    }
}