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
      //this.alternativas.push(this.alternativas);
      this.alternativas.push(this.alternativas[0])
      this.alternativas.push(this.alternativas[1])
      this.alternativas.push(this.alternativas[2])
      this.alternativas.push(this.alternativas[1])
      this.alternativas.push(this.alternativas[0])
      this.alternativas.push(this.alternativas[0])
      console.log()
      // for (let i = 0; i < 3; i++) {
      //   for (let index = 0; index < this.alternativas.length; index++) {
      //   this.alternativas.push(this.alternativas[index])
      //   }        
      // }
      
      console.log(this.alternativas);
      //this.source.load(this.alternativas);
    });
  }

  onCheckboxChange(index:number) {
    //console.log(this.alternativas[index].checked )
    this.alternativas[index].checked = !this.alternativas[index].checked;
  }
  objeto:any;
  onSubmit() {
    console.log(this.alternativas)
    console.log({respostas_alternativas:this.alternativas})
    //console.log(this.alternativas.filter(data => data.checked).map((data:Alternativa)=> ({processo_id:data.processo_id,processo_nome:data.processo_nome,checked:data.checked})))
    //this.formulario_service.getIndicados({respostas_alternativas:this.alternativas.map((data:Alternativa)=> ({processo_id:data.processo_id,processo_nome:data.processo_nome,checked:data.checked}))}).subscribe(response => {console.log("rodou")});
    //this.formulario_service.getIndicados({respostas_alternativas:this.alternativas}).subscribe(response => {console.log("rodou")});
    this.formulario_service.getIndicados({respostas_alternativas:this.alternativas}).subscribe(response => {
      console.log(response)
      this.objeto = response
      this.router.navigate(['client','formulario','resultado'],{state:{objeto:this.objeto}});

    });
    // this.router.navigate([this.route.snapshot.url.join('/')+'/resultado'])
    console.log([this.router.url+'/resultado'])
    //this.router.navigate([this.router.url+'/resultado'])



  }
}
