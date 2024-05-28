import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  selector: 'ngx-descricao-text-editor',
  templateUrl: './descricao-text-editor.component.html',
  styleUrls: ['./descricao-text-editor.component.scss']
})
export class DescricaoTextEditorComponent {
  constructor(private windowRef: NbWindowRef){
      
  }

  
}
