import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alternativa } from '../model/alternativa';
import { LocalDataSource } from 'ng2-smart-table';
import { AlternativaService } from './alternativa.service';
import { AlternativaKtadmin } from '../model/alternativa_ktadmin';
import { BotaoPossuirProcessosComponent } from './botao-possuir-processos/botao-possuir-processos.component';
import { NbWindowService } from '@nebular/theme';
import { ProcessosPossuidosComponent } from './processos-possuidos/processos-possuidos.component';

import { Subscription } from 'rxjs';
import { AlternativaPost } from '../model/alternativa_post';

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
        title: 'ID',
        type: 'number',
        editable: false,
        addable:false
      },
      pergunta: {
        title: 'Pergunta',
        type: 'string',
      },
      // processo_id: {
      //   title: 'Processo_id',
      //   type: 'number',
      //   addable:false,
      //   editable: false,
      // },
      // processo: {
      //   title: 'Processo',
      //   type: 'string',
      // },
       processos: {
         title: 'Processos',
         type:'custom',
         editable: false,
         addable:false,
         renderComponent: BotaoPossuirProcessosComponent,
         filter: false,
         valuePrepareFunction: (cell, row) => {
           // Condição para determinar se o componente deve ser renderizado
           // Se a condição for verdadeira, retorne o valor adequado para o componente,
           // caso contrário, retorne um valor padrão ou vazio
           console.log(cell)
           console.log(row)
           if (row ){
             return true;
           } else {
             return false;  // ou um valor padrão, dependendo do que você deseja
           }
         },
       },
    },
  };
  alternativas:AlternativaKtadmin[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private alternativa_service: AlternativaService,
    private windowService: NbWindowService
    ) {
      this.alternativas=[];
      this.alternativas.push(new AlternativaKtadmin(
        {id: 1,
        pergunta: 'string'
      }
      ));
      this.source.load(this.alternativas);
    // this.alternativa_service.getAlternativas().subscribe(response =>{
    //   this.data1=response;
    //   this.source.load(this.data1);
    // });
  }

  onAddConfirm(event): void {
    console.log(typeof event)
    //atypeof 
    console.log(event)
    // let newDataTransfer={
    //   id: event.newData.id==""?-1:Number(event.newData.id),
    //   pergunta:event.newData.pergunta
    // }
    //new AlternativaKtadmin({alternativa_id:77,pergunta:'aaa?'}
    let newDataTransfer={
      alternativa_id: -1,
      pergunta:event.newData.pergunta
    }
    console.log(newDataTransfer)

    this.alternativa_service.addAlternativa(new AlternativaPost({pergunta:event.newData.pergunta}))
  .subscribe((alternativaDataReturn:AlternativaKtadmin)=>
      {
        this.alternativas.push(alternativaDataReturn)
        this.source.load(this.alternativas);
        event.confirm.resolve()

      });
    // // this.windowService.open(ProcessosPossuidosComponent, 
    // //   {
    // //     title: `Insira ao menos um processo para salvar a nova alternativa`,
    // //     context: {
    // //       rowData: newDataTransfer,  // Passa os dados do rowData para o ProcessosPossuidosComponent
    // //     },
    // //     buttons:{
    // //       minimize: false,
    // //       maximize: true,
    // //       fullScreen: true,
    // //       close: true,
    // //     }
    // // });
    
    
    /*
    //adicionando e dps pegando as alternativas
    this.alternativa_service.addAlternativa(event.newData).subscribe(

       event.confirm.resolve()
            this.alternativa_service.getAlternativas().subscribe(response =>{
            this.data1=response;
            this.source.load(this.data1);
          });
    );*/
  }
  // algoTerminado(event): void {
  //   console.log('O filho terminou algo com os seguintes dados:', event);
  //   this.settings.add.confirmCreate = true
  //   //event.confirm.resolve();
  // }
  onEditConfirm(event): void {
    this.alternativa_service.updateAlternativa(event.newData).subscribe(event.confirm.resolve());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.alternativa_service.deleteAlternativa(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }
  }
}
