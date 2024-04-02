import { Component, Inject, OnInit } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { FormRespondido } from '../../../../../model/form-respondido';
import { FormulariosQuestoesService } from './formulario-questoes.service';
import { forkJoin } from 'rxjs';
import { Formulario } from '../../../../../model/formulario';
import { FormularioRespondidoPut } from '../../../../../model/formulario_respondido_put';

@Component({
  selector: 'ngx-formulario-questoes',
  templateUrl: './formulario-questoes.component.html',
  styleUrls: ['./formulario-questoes.component.scss']
})
export class FormularioQuestoesComponent  implements OnInit{
  constructor(
    private windowRef: NbWindowRef,
    @Inject (FormulariosQuestoesService)
    private formularioQuestoesService:FormulariosQuestoesService,
    //private formsRespondidosServie:FormsRespondidosService
    ) {}
  ngOnInit() {
    this.buttonData = this.windowRef.config.context;
    this.stakeholder = this.buttonData.stakeholder;
    this.formularioRespondidoData = JSON.parse(JSON.stringify(this.buttonData.formularioData));

    //this.formularioRespondidoData= this.buttonData.formularioData;
    //this.edittedForm=this.formularioRespondidoData;
    this.edittedForm = JSON.parse(JSON.stringify(this.formularioRespondidoData));

    console.log(this.edittedForm)
    
    this.formularioQuestoesService.getFormulario(this.formularioRespondidoData.nomeFormulario).subscribe(response =>{
      this.formulario=response;
      console.log(this.formulario)
    });
  }
  edittedForm: FormRespondido;
  buttonData:any ;
  stakeholder:any;
  formularioRespondidoData:any;
  formulario:Formulario;
  arrayteste=[0,1,2];
  formularioEditSubmit:FormularioRespondidoPut;
  
  alternativaSelecionada:number;

  onSubmit() {
    // Lógica a ser executada quando o formulário for submetido
    //this.formularioQuestoesService.getFormulario()
    //event.preventDefault();
    console.log(this.arrayteste)

    console.log('Formulário enviado!');
    console.log(this.edittedForm);
    console.log(this.formularioRespondidoData)
    console.log(this.buttonData.formularioData)
    this.formularioQuestoesService.updateFormulario(this.edittedForm).subscribe();

  }

  onChangeAlternativa(alternativa_id: any, slot_questao:any) {
    //this.selectedOption = option;
    // Aqui você pode acessar os detalhes da opção selecionada, como option.value ou option.label
    console.log('alternativaSelecionada:', this.alternativaSelecionada);
    this.edittedForm.respostas_questoes[slot_questao].alternativa_id=alternativa_id;
    //console.log('Opção selecionada:', option);
    // Implemente a lógica para modificar os slots conforme necessário
    // Por exemplo:
    // if (option) {
    //   this.slots[option.value - 1] = 'Opção ' + option.value;
    // }
  }
}
