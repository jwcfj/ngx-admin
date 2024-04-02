import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-navegar-formulario',
  templateUrl: './navegar-formulario.component.html',
  styleUrls: ['./navegar-formulario.component.scss']
})
export class NavegarFormularioComponent {

  constructor(    private router:Router
    ){}
  OnClick(){
    this.router.navigate(['client','formulario'])
  }
}
