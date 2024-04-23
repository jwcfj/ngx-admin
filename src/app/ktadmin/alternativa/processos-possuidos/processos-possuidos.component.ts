import { Component, Input, OnInit } from '@angular/core';
import { Processo } from '../../model/processo';
import { LocalDataSource } from 'ng2-smart-table';
import { ProcessoService } from '../../processo/processo.service';
import { ProcessosPssuidosService } from './processos-possuidos.service';
import { NbWindowRef } from '@nebular/theme';
import { AlternativaService } from '../alternativa.service';
import { ProcessoPossuido } from '../../model/processo_possuido';
import { AlternativaPost } from '../../model/alternativa_post';
import { Alternativa } from '../../model/alternativa';
import { ProcessoPossuidoPost } from '../../model/processo_possuido_post';
import { AlternativaKtadmin } from '../../model/alternativa_ktadmin';

@Component({
  selector: 'ngx-processos-possuidos',
  templateUrl: './processos-possuidos.component.html',
  styleUrls: ['./processos-possuidos.component.scss']
})
export class ProcessosPossuidosComponent  {
  //@Input() value: any;    // 
  //@Input() rowData: any;  // This holds the entire row object

  settings = {
    mode: 'inline',
    actions: {
      edit:false
      },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },    
    columns: {
      possui_id: {
        title: 'Possui_id',
        type: 'number',
        addable:false,
        editable: false,
      },
       processo_id: {
         title: 'Processo_id',
         type: 'number',
         addable:true,
         editable: false,
       },
       nome_processo: {
         title: 'Nome',
         type: 'string',
         addable:false,
         editable: false,
       },
    },
  };
  processo_possuido_data:ProcessoPossuido[] = [];
  source: LocalDataSource = new LocalDataSource();
  alternativaData: any;
  constructor(
    private windowRef: NbWindowRef,
    private processosPossuidosService: ProcessosPssuidosService,
    private alternativa_service: AlternativaService
    ) {
      // this.processo_possuido_data=[];
      // this.processo_possuido_data.push(new ProcessoPossuido(
      //   {
      //     possui_id: 1,
      //     processo_id:2,
      //     nome_processo: 'string',
      // }
      // ));
     // console.log(this.processo_possuido_data);
      // this.source.load(this.processo_possuido_data);
      this.alternativaData = this.windowRef.config.context;
      this.alternativaData = this.alternativaData.rowData;
      //console.log(this.windowRef)
      //console.log(this.rowData);
      // if(this.alternativaData.alternativa_id==-1){
      //   console.log('alternativa nao criada ainda')
      //   //nao chamar service que retorna os processos que a alternativa possui
      // }
      // else{//chamar service que retorna os processos que a alternativa possui
      //   //processosPossuidosService.get...
      //   //inserir processos em this.processo_possuido_data
      // }

      /*
      this.data = this.rowData.formulariosRespondidos
      this.source.load(this.data)
      */

     this.processosPossuidosService.getProcessosPossuidos(this.alternativaData.alternativa_id).subscribe(response =>{
       this.processo_possuido_data=response;
       console.log(response);
       this.source.load(this.processo_possuido_data);
     });
    console.log('constructor')
  }


  onAddConfirm(event): void {

      console.log(event);
      // console.log(this.alternativaData);
      // this.processo_possuido_data.push(
      //   new ProcessoPossuido({
      //     possui_id:5,
      //     processo_id:5,
      //     nome_processo:'stringg'})
      // );
      // event.newData.nome_processo = 'stringg';
      // event.newData.possui_id = '5';
      // event.newData.processo_id = '5';
      // //this.source.load(this.processo_possuido_data);
      // event.confirm.resolve();
      
      // this.processo_possuido_data.push(
      //   new ProcessoPossuido({
      //     possui_id: 5,
      //     processo_id: 5,
      //     nome_processo: 'stringg'
      //   })
      // );
      this.processosPossuidosService.cadastrarProcessoPossuido(new ProcessoPossuidoPost({processo_id:event.newData.processo_id,alternativa_id:this.alternativaData.alternativa_id})).subscribe(
        (response:ProcessoPossuido) =>{
             this.processo_possuido_data.push(response);
             this.source.load(this.processo_possuido_data);
             event.confirm.resolve()
           });
  }

  onEditConfirm(event): void {
    //this.alternativa_service.updateAlternativa(event.newData).subscribe(event.confirm.resolve());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event)
      this.processosPossuidosService.deleteProcessoPossuido(event.data.possui_id).subscribe(
        event.confirm.resolve()
      );
  //    this.alternativa_service.deleteAlternativa(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }
  }
}
