import { Component } from '@angular/core';
import { FormularioService } from './formulario.service';
import { AlternativaCheck } from '../../ktadmin/model/alternativa-check';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ngx-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  alternativas:AlternativaCheck[];
  constructor(
    private formulario_service: FormularioService,
    private route: ActivatedRoute,
    private router:Router
    ) {
    this.formulario_service.getAlternativas().subscribe(response =>{
      this.alternativas=response;
    });
  }

  onCheckboxChange(index:number) {
    this.alternativas[index].checked = !this.alternativas[index].checked;
  }
  objeto:any;
  onSubmit() {
    this.formulario_service.getIndicados({alternativas:this.alternativas}).subscribe(response => {
      this.objeto = response
      this.router.navigate(['client','formulario','resultado'],{state:{objeto:this.objeto}});
    });
  }
}
