import { Component } from '@angular/core';
import { Alternativa } from '../model/alternativa';
import { LocalDataSource } from 'ng2-smart-table';
import { AlternativaService } from './alternativa.service';

@Component({
  selector: 'ngx-alternativa',
  templateUrl: './alternativa.component.html',
  styleUrls: ['./alternativa.component.scss']
})
export class AlternativaComponent {
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
      pergunta: {
        title: 'Pergunta',
        type: 'string',
      },
      processo_id: {
        title: 'Processo_id',
        type: 'number',
        addable:false,
        editable: false,
      },
      processo: {
        title: 'Processo',
        type: 'string',
      },
    },
  };
  data1:Alternativa[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private alternativa_service: AlternativaService
    ) {
    this.alternativa_service.getAlternativas().subscribe(response =>{
      this.data1=response;
      console.log(this.data1);
      this.source.load(this.data1);
    });
  }

  showAnsweredForms(row){
    console.log(row);
  }
  getStakeholders():void {
     this.alternativa_service.getAlternativas().subscribe(
       (retornoAPI) => console.log(retornoAPI)
     )
  }

  onAddConfirm(event): void {
    console.log(event);
    //const stakeholder:Stakeholder = event.newData;
    this.alternativa_service.addAlternativa(event.newData).subscribe(event.confirm.resolve());
  }

  onEditConfirm(event): void {
    console.log(event);
    //const Alternativa:Alternativa = event.newData;
    if(event.data!=event.newData)console.log("equals")
    //this.alternativa_service.updateAlternativa(event.newData).subscribe(event.confirm.resolve());
    this.alternativa_service.updateAlternativa(event.newData).subscribe(event.confirm.resolve());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      this.alternativa_service.deleteAlternativa(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }
  }
}
