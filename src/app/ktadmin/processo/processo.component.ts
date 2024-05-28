import { Component } from '@angular/core';
import { Processo } from '../model/processo';
import { LocalDataSource } from 'ng2-smart-table';
import { ProcessoService } from './processo.service';
import { NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { DescricaoTextEditorComponent } from './descricao-text-editor/descricao-text-editor.component';

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
      },
      descricao: {
        title: 'Descricao',
        type: 'string',
      },
      ferramentas: {
        title: 'Ferramentas',
        type: 'string',
      },
      indicadores: {
        title: 'Indicadores',
        type: 'string',
      },
      metricas: {
        title: 'Métricas',
        type: 'string',
      },
      stakeholders: {
        title: 'Stakeholders (perfil sugerido)',
        type: 'string',
      },
      etapas: {
        title: 'Etapas',
        type: 'string',
      }
      /*,
      VisaoGeralDoProcesso: {
        title: 'Visão Geral do Processo',
        type: 'string',
      },*/
    },
  };

  /*

  Ferramentas
  Indicadores
  Metricas
  Stakeholders
  Etapas
  VisaoGeralDoProcesso


  "Fator de Influencia"
  "Tipo de Conhecimento"
  "Ambiente (Escopo)"
  "Tamanho da Organizacao"
  "Momento de Execucacao"
  "Dominio de Aplicacao"
  "Artefato Gerado"
  */

  data1:Processo[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private processo_service: ProcessoService,
    private windowService: NbWindowService
    ) {
    this.processo_service.getProcessos().subscribe(response =>{
      this.data1=response;
      this.source.load(this.data1);
    });
  }

  minimize = false;
  maximize = false;
  fullScreen = false;
  close = true;


  onAddConfirm(event): void {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: this.minimize,
      maximize: this.maximize,
      fullScreen: this.fullScreen,
      close: this.close,
    };
    //this.processo_service.addProcesso(event.newData).subscribe(event.confirm.resolve());
    console.log(event.newData);
    this.windowService.open(DescricaoTextEditorComponent, {
      title: `Digite a descricao : `, //: ${this.rowData.alternativa_id}`,
      hasBackdrop: false, 
      closeOnEsc: false,
      buttons: buttonsConfig,
      context: {
        rowData: event.newData  
      },
    }).onClose.subscribe((res)=>{console.log(res)});
  }

  onEditConfirm(event): void {
    this.processo_service.updateProcesso(event.newData).subscribe(event.confirm.resolve());
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.processo_service.deleteProcesso(event.data.id).subscribe(event.confirm.resolve());
    } else {
      event.confirm.reject();
    }
  }
}
