import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { NbAccordionModule, NbTabsetModule } from '@nebular/theme';
import { ResultadoComponent } from './resultado/resultado.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    NbAccordionModule,
    NbTabsetModule
  ]
})
export class FormularioModule { }
