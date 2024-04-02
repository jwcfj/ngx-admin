import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {
    path: '', component:FormularioComponent,
    children:[
      {
        path:'resultado', component:ResultadoComponent
      },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
