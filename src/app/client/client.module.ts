import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';
// import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { ModalOverlaysModule } from '../pages/modal-overlays/modal-overlays.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './formulario/resultado/resultado.component';
import { NavegarFormularioComponent } from './navegar-formulario/navegar-formulario.component';


@NgModule({
  declarations: [
    ClientComponent,
    FormularioComponent,
    ResultadoComponent,
    NavegarFormularioComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule,NbSelectModule, 
    Ng2SmartTableModule,
    NbButtonModule,
    NbCheckboxModule,
    NbTabsetModule,
    NbAccordionModule


  ]
})
export class ClientModule { }
