import { Component } from '@angular/core';
import { Processo } from '../../model/processo';
import { LocalDataSource } from 'ng2-smart-table';
import { ProcessoService } from './processo.service';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

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
        title: 'Name',
        type: 'string',
      },
      descricao: {
        title: 'Description PDF URL',
        type: 'string',
      },
    },
  };
  data1:Processo[];
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private processo_service: ProcessoService,
    private toastrService: NbToastrService
    ) {
    this.processo_service.getProcessos().subscribe(response =>{
      this.data1=response
      //this.data1.unshift(this.processo_mocked.defaultProcess)
      this.source.load(this.data1);
    });
  }

  onAddConfirm(event): void {
    
    this.processo_service.addProcesso(event.newData).subscribe(event.confirm.resolve());
  }

  onEditConfirm(event): void {
    // if(event.data.id==-1) this.processo_mocked.defaultProcess=event.newData;
    // else
    // {
      this.processo_service.updateProcesso(event.newData).subscribe(event.confirm.resolve());
    // }
  }

  onDeleteConfirm(event): void {
    if(event.data.id==-1) this.showToast("Default Process can't be deleted");
    else
    {
      if (window.confirm('Are you sure you want to delete?')) {
        this.processo_service.deleteProcesso(event.data.id).subscribe(event.confirm.resolve());
      } else {
        event.confirm.reject();
      }
    }
  }

  //index = 1;
  //destroyByClick = true;
  //duration = 2000;
  //hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  //preventDuplicates = false;
  //status: NbComponentStatus = 'primary';

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
      `Warning`,
      config);
  }

}
