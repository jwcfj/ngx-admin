import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadoComponent } from './formulario/resultado/resultado.component';
import { NavegarFormularioComponent } from './navegar-formulario/navegar-formulario.component';

const routes: Routes = [
  { 
    path: '', component: ClientComponent,
    children:[
      {
        path: '', component: NavegarFormularioComponent,
      },
      {
        path: 'formulario', component: FormularioComponent,
      },
      {        
        path:'formulario/resultado', component:ResultadoComponent
      },
      {
        path: '**', component: NavegarFormularioComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
