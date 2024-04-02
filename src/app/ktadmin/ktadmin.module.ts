import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbListModule, NbMenuModule, NbSelectModule } from '@nebular/theme';


import { ThemeModule } from '../@theme/theme.module';
import { KtadminRoutingModule } from './ktadmin-routing.module';
import { KtadminComponent } from './ktadmin.component';
// import { ListarComponent } from './listar/listar.component';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
// import { ModalOverlaysModule } from '../pages/modal-overlays/modal-overlays.module';
import { FormsRespondidosButtonComponent } from './stakeholder/forms-respondidos-button/forms-respondidos-button.component';
import { FormsRespondidosComponent } from './stakeholder/forms-respondidos-button/forms-respondidos/forms-respondidos.component';
import { QuestoesButtonComponent } from './stakeholder/forms-respondidos-button/forms-respondidos/questoes-button/questoes-button.component';
import { QuestoesComponent } from './stakeholder/forms-respondidos-button/forms-respondidos/questoes-button/questoes/questoes.component';
import { FormularioQuestoesComponent } from './stakeholder/forms-respondidos-button/forms-respondidos/questoes-button/formulario-questoes/formulario-questoes.component';
import { FormsModule } from '@angular/forms';
// import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { ProcessoComponent } from './processo/processo.component';
import { AlternativaComponent } from './alternativa/alternativa.component';

@NgModule({
  declarations: [
    KtadminComponent,
    StakeholderComponent,
    FormsRespondidosButtonComponent,
    FormsRespondidosComponent,
    QuestoesButtonComponent,
    QuestoesComponent,
    FormularioQuestoesComponent,
    ProcessoComponent,
    AlternativaComponent
  ],
  imports: [
    CommonModule,
    KtadminRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule,NbSelectModule,     
    // FormsRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    // ModalOverlaysModule,
    
  ]
})
export class KtadminModule { }
