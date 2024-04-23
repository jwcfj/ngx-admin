import { Component, Input } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ProcessosPossuidosComponent } from '../processos-possuidos/processos-possuidos.component';

@Component({
  template: `
    <button nbButton status="control" (click)="possuirProcessos()"><nb-icon icon="archive-outline"></nb-icon></button>
  `,
})
export class BotaoPossuirProcessosComponent {
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object


  constructor(private windowService: NbWindowService) {}

  possuirProcessos(){
    console.log(this.value);
    console.log(this.rowData);
    this.windowService.open(ProcessosPossuidosComponent, {
      title: `Gerencie os processos da alternativa id : ${this.rowData.alternativa_id}`,
      context: {
        rowData: this.rowData,  // Passa os dados do rowData para o ProcessosPossuidosComponent
      },
    });

  }
}