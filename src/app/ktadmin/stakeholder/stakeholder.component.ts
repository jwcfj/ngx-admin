import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { StakeholderService } from './stakeholder.service';
import { Stakeholder } from '../model/stakeholder';
// import { ModalOverlaysComponent } from '../../pages/modal-overlays/modal-overlays.component';
// import { WindowComponent } from '../../pages/modal-overlays/window/window.component';
import { FormsRespondidosButtonComponent } from './forms-respondidos-button/forms-respondidos-button.component';
@Component({
  selector: 'ngx-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.scss']
})
export class StakeholderComponent {
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
        editable: false
      },
      cpf: {
        title: 'CPF',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      filiacao: {
        title: 'Filiacao',
        type: 'string',
      },
      cargo: {
        title: 'Cargo',
        type: 'string',
      },
      senioridade: {
        title: 'Senioridade',
        type: 'string',
      },
      FormsRespondidos: {
        title: 'FormsRespondidos',
        type:'custom',
        editable: false,
        addable:false,
        renderComponent: FormsRespondidosButtonComponent,
        filter: false,
        valuePrepareFunction: (cell, row) => {
          // Condição para determinar se o componente deve ser renderizado
          // Se a condição for verdadeira, retorne o valor adequado para o componente,
          // caso contrário, retorne um valor padrão ou vazio
          if (row && row.formulariosRespondidos.length!=0) {
            return true;
          } else {
            return false;  // ou um valor padrão, dependendo do que você deseja
          }
        },
      },
    },
  };
  data1:Stakeholder[];
  source: LocalDataSource = new LocalDataSource();
  constructor(private service: SmartTableData,
    private stakeholder_service: StakeholderService
    ) {
    this.stakeholder_service.getStakeholders().subscribe(response =>{
      this.data1=response;
      console.log(this.data1);
      this.source.load(this.data1);
    });
  }

  showAnsweredForms(row){
    console.log(row);
  }
  getStakeholders():void {
     this.stakeholder_service.getStakeholders().subscribe(
       (retornoAPI) => console.log(retornoAPI)
     )
  }

  onAddConfirm(event): void {
    console.log(event);
    //const stakeholder:Stakeholder = event.newData;
    this.stakeholder_service.addStakeholder(event.newData).subscribe(event.confirm.resolve());
  }

  onEditConfirm(event): void {
    console.log(event);
    //const stakeholder:Stakeholder = event.newData;
    if(event.data!=event.newData)console.log("equals")
    this.stakeholder_service.updateStakeholder(event.newData).subscribe(event.confirm.resolve());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      this.stakeholder_service.deleteStakeholder(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }
  }
}
