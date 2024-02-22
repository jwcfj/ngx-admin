import { Component, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { FormsRespondidosService } from './forms-respondidos.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FormRespondido } from '../../../model/form-respondido';
import { QuestoesButtonComponent } from './questoes-button/questoes-button.component';

@Component({
  selector: 'ngx-forms-respondidos',
  templateUrl: './forms-respondidos.component.html',
  styleUrls: ['./forms-respondidos.component.scss']
})
export class FormsRespondidosComponent implements OnInit{
  rowData: any;


  source: LocalDataSource = new LocalDataSource();

  settings = {
    actions: {
      add: false, // Desabilita a ação de adicionar
      edit: false, // Desabilita a ação de editar
      delete: true, // Habilita a ação de deletar
    },
    mode: 'inline',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },    
    //criar um modal pra edição de resposta
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable:false
      },
      data_criacao: {
        title: 'Data',
        type: 'string',
        editable: false
      },
      nomeFormulario: {
        title: 'Formulario',
        type: 'string',
      },
      nomeStakeholder: {
        title: 'Stakeholder',
        type: 'string',
      },
      respostas_questoes:{
        title: 'Questoes',
        type:'custom',
        renderComponent:QuestoesButtonComponent,
        filter: false,
        valuePrepareFunction: (cell: any, row: any) => {
               return this.rowData;
            },
          },
    },
  };
  data:FormRespondido[]
  constructor(
    private windowRef: NbWindowRef,
    ) {
      this.rowData = this.windowRef.config.context
      this.rowData = this.rowData.rowData;
      console.log(this.windowRef)
      this.data = this.rowData.formulariosRespondidos
      this.source.load(this.data)

  }

  ngOnInit() {
    console.log(this.rowData)
  }

  onDeleteConfirm(event): void {
    /*if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      this.stakeholder_service.deleteStakeholder(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }*/
  }
}
