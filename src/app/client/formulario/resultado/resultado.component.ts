import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent  implements OnInit{
  objetoRecebido:any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit():void{
    this.objetoRecebido = history.state.objeto;
    console.log(this.objetoRecebido)
  }

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
  
}
