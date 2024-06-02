import { Component, Input } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ProcessosPossuidosComponent } from '../processos-possuidos/processos-possuidos.component';

@Component({
  template: `
    <button nbButton status="control" (click)="possuirProcessos()"><nb-icon icon="archive-outline"></nb-icon></button>
  `,
})
export class BotaoPossuirProcessosComponent {
  @Input() value: any;    
  @Input() rowData: any;  


  constructor(private windowService: NbWindowService) {}

  possuirProcessos(){
    this.windowService.open(ProcessosPossuidosComponent, {
      title: `Manage processes from alternative id: ${this.rowData.alternativa_id}`,
      context: {
        rowData: this.rowData,  
      },
    });

  }
}