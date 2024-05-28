import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbListModule, NbMenuModule, NbSelectModule } from '@nebular/theme';


import { ThemeModule } from '../@theme/theme.module';
import { KtadminRoutingModule } from './ktadmin-routing.module';
import { KtadminComponent } from './ktadmin.component';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProcessoComponent } from './processo/processo.component';
import { AlternativaComponent } from './alternativa/alternativa.component';
import { ProcessosPossuidosComponent } from './alternativa/processos-possuidos/processos-possuidos.component';
import { BotaoPossuirProcessosComponent } from './alternativa/botao-possuir-processos/botao-possuir-processos.component';
import { DescricaoStepperComponent } from './processo/descricao-stepper/descricao-stepper.component';
import { DescricaoTextEditorComponent } from './processo/descricao-text-editor/descricao-text-editor.component';

@NgModule({
  declarations: [
    KtadminComponent,
    ProcessoComponent,
    AlternativaComponent,
    ProcessosPossuidosComponent,
    BotaoPossuirProcessosComponent,
    DescricaoStepperComponent,
    DescricaoTextEditorComponent
  ],
  imports: [
    CommonModule,
    KtadminRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbListModule,NbSelectModule,     
    Ng2SmartTableModule,
    NbButtonModule,
    
  ]
})
export class KtadminModule { }
