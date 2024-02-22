import { Component, Input } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ViewCell } from 'ng2-smart-table';
import { FormsRespondidosComponent } from './forms-respondidos/forms-respondidos.component';
@Component({
  template: `
    <button [disabled]="rowData.formulariosRespondidos.length===0" nbButton status="control" (click)="getFormsRespondidos()"><nb-icon icon="archive-outline"></nb-icon></button>
  `,
})

export class FormsRespondidosButtonComponent implements ViewCell{
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object


  constructor(private windowService: NbWindowService) {}

  getFormsRespondidos(){
    console.log(this.value);
    console.log(this.rowData);
    this.windowService.open(FormsRespondidosComponent, {
      title: `FormsRespondidos de ${this.rowData.nome}`,
      context: {
        rowData: this.rowData,  // Passa os dados do rowData para o FormsRespondidosComponent
      },
    });

  }
}
