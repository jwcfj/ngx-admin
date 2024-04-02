import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KtadminComponent } from './ktadmin.component';
// import { ListarComponent } from './listar/listar.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { ProcessoComponent } from './processo/processo.component';
import { AlternativaComponent } from './alternativa/alternativa.component';

const routes: Routes = [
  { 
  path: '', component: KtadminComponent,
    children:[
      {
        path: 'processo', component:ProcessoComponent
      },
      {
        path: 'alternativa', component:AlternativaComponent
      }
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KtadminRoutingModule { }
