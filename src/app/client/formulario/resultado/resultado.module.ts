import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadoRoutingModule } from './resultado-routing.module';
import { ChartModule } from 'angular2-chartjs';
import { NbAccordionModule, NbProgressBarModule, NbTabsetModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ResultadoComponent } from './resultado.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ResultadoRoutingModule,
    NbTabsetModule,
    

  ]
})
export class ResultadoModule { }
