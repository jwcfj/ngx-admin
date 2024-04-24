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
      this.alternativaData = this.windowRef.config.context;
      this.alternativaData = this.alternativaData.rowData;

     this.processosPossuidosService.getProcessosPossuidos(this.alternativaData.alternativa_id).subscribe(response =>{
       this.processo_possuido_data=response;
       this.source.load(this.processo_possuido_data);
     });
  }


  onAddConfirm(event): void {

      
      this.processosPossuidosService.cadastrarProcessoPossuido(new ProcessoPossuidoPost({processo_id:event.newData.processo_id,alternativa_id:this.alternativaData.alternativa_id})).subscribe(
        (response:ProcessoPossuido) =>{
             this.processo_possuido_data.push(response);
             this.source.load(this.processo_possuido_data);
             event.confirm.resolve()
           });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.processosPossuidosService.deleteProcessoPossuido(event.data.possui_id).subscribe(
        event.confirm.resolve()
      );
    } else {
      event.confirm.reject();
    }
  }
}
