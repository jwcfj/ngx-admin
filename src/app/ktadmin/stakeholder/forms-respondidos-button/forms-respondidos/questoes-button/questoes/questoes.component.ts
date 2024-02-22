import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})
export class QuestoesComponent implements OnInit{
  ngOnInit() {
    this.buttonData = this.windowRef.config.context
    //this.stakeholderId = this.buttonData.stakeholderId;
    this.formularioData= this.buttonData.formularioData;
    this.respostasQuestoesData = this.formularioData.respostas_questoes;
    console.log(this.windowRef)
    this.source.load(this.respostasQuestoesData)
  }
  source: LocalDataSource = new LocalDataSource();
  settings = {
    mode: 'inline',
    /*edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },*/
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },    
    //criar um modal pra edição de resposta
    columns: {
      id: {
        title: 'Questao ID',
        type: 'number',
        editable: false,
        addable:false
      },
      pergunta: {
        title: 'Pergunta',
        type: 'string',
        editable: false
      },
      alternativa_id: {
        title: 'Alternativa ID',
        type: 'number',
      },
    },
  };
  buttonData:any;
  //stakeholderId:number;
  formularioData:any;
  respostasQuestoesData:any;

  constructor(
    private windowRef: NbWindowRef,
    //private formsRespondidosServie:FormsRespondidosService
    ) {


  }
}
