import { Component } from '@angular/core';
import { Processo } from '../model/processo';
import { LocalDataSource } from 'ng2-smart-table';
import { ProcessoService } from './processo.service';

@Component({
  selector: 'ngx-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent {
  settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },    
    // FormsRespondidos: {
    //   title: 'FormsRespondidos',
    //   formsRespondidosButtonContent: '<i class="archive-outline"></i>'
    // },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable:false
      },
      nome: {
        title: 'Nome',
        type: 'string',
        //editable: true
      },
      descricao: {
        title: 'Descricao',
        type: 'string',
      },
    },
  };
  data1:Processo[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private processo_service: ProcessoService
    ) {
    this.processo_service.getProcessos().subscribe(response =>{
      this.data1=response;
      console.log(this.data1);
      this.source.load(this.data1);
    });
  }

  showAnsweredForms(row){
    console.log(row);
  }
  getStakeholders():void {
     this.processo_service.getProcessos().subscribe(
       (retornoAPI) => console.log(retornoAPI)
     )
  }

  onAddConfirm(event): void {
    console.log(event);
    //const stakeholder:Stakeholder = event.newData;
    this.processo_service.addProcesso(event.newData).subscribe(event.confirm.resolve());
  }

  onEditConfirm(event): void {
    console.log(event);
    //const stakeholder:Stakeholder = event.newData;
    if(event.data!=event.newData)console.log("equals")
    this.processo_service.updateProcesso(event.newData).subscribe(event.confirm.resolve());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      this.processo_service.deleteProcesso(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }
  }
}
