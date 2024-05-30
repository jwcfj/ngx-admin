import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  public elementSrc = [];
  ngOnInit():void{
    this.objetoRecebido = history.state.objeto;
    const regex = /\/d\/([^\/]+)\/view/;
    console.log(regex);
    console.log(this.objetoRecebido.recorrencia_processos);
    for (let i = 0; i < this.objetoRecebido.recorrencia_processos.length; i++) {
      console.log(this.objetoRecebido.recorrencia_processos[i].descricao);
      console.log(this.objetoRecebido.recorrencia_processos[i].descricao.match(regex))
    
      let matchID:string = this.objetoRecebido.recorrencia_processos[i]?.descricao.match(regex)[1];
      // https://drive.google.com/file/d/1jix-sNRAy0nwGo4D0PXu5ZC7KTdm6AWK/view?usp=drive_link
      // <iframe src="https://docs.google.com/viewer?srcid=[put your file id here]&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="580px" height="480px"></iframe>
      const url = "https://docs.google.com/viewer?srcid="+ matchID
      +"&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
      console.log(url);
      this.elementSrc[i] = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      
    }
    
    console.log(this.objetoRecebido)
  }

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
  public  returnUrl(teste):string{
    console.log(teste);
    return teste;
  }
  
}

