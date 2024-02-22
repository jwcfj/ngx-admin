import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KtadminComponent } from './ktadmin.component';
import { ListarComponent } from './listar/listar.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';

const routes: Routes = [
  { 
  path: '', component: KtadminComponent,
    children:[
      {
        path: 'listar', component: ListarComponent
      },
      {
        path: 'stakeholder', component: StakeholderComponent
      }]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KtadminRoutingModule { }
