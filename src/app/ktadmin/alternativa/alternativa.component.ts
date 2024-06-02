import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alternativa } from '../../model/alternativa';
import { LocalDataSource } from 'ng2-smart-table';
import { AlternativaService } from './alternativa.service';
import { AlternativaKtadmin } from '../../model/alternativa_ktadmin';
import { BotaoPossuirProcessosComponent } from './botao-possuir-processos/botao-possuir-processos.component';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService, NbWindowService } from '@nebular/theme';
import { ProcessosPossuidosComponent } from './processos-possuidos/processos-possuidos.component';

import { Subscription } from 'rxjs';
import { AlternativaPost } from '../../model/alternativa_post';


@Component({
  selector: 'ngx-alternativa',
  templateUrl: './alternativa.component.html',
  styleUrls: ['./alternativa.component.scss']
})
export class AlternativaComponent{
  eventoSubscription: Subscription;


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
    columns: {
      alternativa_id: {
        title: 'Alternative ID',
        type: 'number',
        editable: false,
        addable:false
      },
      pergunta: {
        title: 'Alternative',
        type: 'string',
      },
       processos: {
         title: 'Process',
         type:'custom',
         editable: false,
         addable:false,
         renderComponent: BotaoPossuirProcessosComponent,
         filter: false,
         valuePrepareFunction: (cell, row) => {
           if (row ){
             return true;
           } else {
             return false; 
           }
         },
       },
    },
  };
  alternativas:Alternativa[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private alternativa_service: AlternativaService,
    private windowService: NbWindowService,
    private toastrService: NbToastrService
    ) {
      this.alternativas=[];
      //this.source.load(this.alternativas);
      
       this.alternativa_service.getAlternativas().subscribe(response =>{
        this.alternativas=response
         //this.alternativas.unshift(globalDataMock.defaultAlternativa);
         this.source.load(this.alternativas);
       });
  }

  onAddConfirm(event): void {
    let newDataTransfer={
      alternativa_id: -1,
      pergunta:event.newData.pergunta
    }

    this.alternativa_service.addAlternativa(new AlternativaPost({pergunta:event.newData.pergunta}))
  .subscribe((alternativaDataReturn:AlternativaKtadmin)=>
      {
        this.alternativas.push(alternativaDataReturn)
        this.source.load(this.alternativas);
        event.newData.alternativa_id = alternativaDataReturn.alternativa_id
        event.confirm.resolve()

      });
  }

  onEditConfirm(event): void {
    if(event.data.alternativa_id==-1)this.showToast("Default Alternative can't be eddited");
    else
    {
      this.alternativa_service.updateAlternativa(event.newData).subscribe(event.confirm.resolve());
    }
  }


  onDeleteConfirm(event): void {
    if(event.data.alternativa_id==-1)
      {
        this.showToast("Default Alternative can't be deleted");
        event.confirm.reject();
      }
    else
    {
      if (window.confirm('Are you sure you want to delete?')) {
        this.alternativa_service.deleteAlternativa(event.data.alternativa_id).subscribe(event.confirm.resolve());
      } else {
        event.confirm.reject();
      }
    }
  }
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;

  private showToast(message:string) {
    const config = {
      status: 'warning',
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: this.position,
      preventDuplicates: false
    };

    this.toastrService.show(
      message,
      //"Default Alternative can't be deleted",
      `Warning`,
      config);
  }
}
