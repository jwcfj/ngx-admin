import { Component, Input } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { ViewCell } from 'ng2-smart-table';
import { QuestoesComponent } from './questoes/questoes.component';
import { FormularioQuestoesComponent } from './formulario-questoes/formulario-questoes.component';

@Component({
  template: `
    <button nbButton status="control" (click)="getQuestoesRespondidas()"><nb-icon icon="archive-outline"></nb-icon></button>
  `,
})
export class QuestoesButtonComponent implements ViewCell{
  @Input() value: any;    // This hold the cell value
  @Input() rowData: any;  // This holds the entire row object


  constructor(private windowService: NbWindowService) {

  }

  
  getQuestoesRespondidas(){
    console.log("stakeholder:")
    console.log(this.value)
    console.log("formulario:")
    console.log(this.rowData)
    //console.log(this.value);
    //console.log(this.rowData);

    /*
    //abrrir componenet que lista as questoes versão antiga
    this.windowService.open(QuestoesComponent, {
      title: `Respostas de ${this.value.nome} do formulario ${this.rowData.nomeFormulario}`,
      context: {
        stakeholderId: this.value.id,  // Passa os dados do rowData para o FormsRespondidosComponent
        formularioData: this.rowData,
      },
    });
    */

    this.windowService.open(FormularioQuestoesComponent, {
      title: `Respostas de ${this.value.nome} do formulario ${this.rowData.nomeFormulario}`,
      context: {
        stakeholder: this.value,  // Passa os dados do rowData para o FormsRespondidosComponent
        formularioData: this.rowData,
      },
    });

  }
}
