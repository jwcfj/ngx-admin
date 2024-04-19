import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-client',
  template:` <ngx-one-column-layout>
  <nb-menu [items]="menu"></nb-menu>
  <router-outlet></router-outlet>
</ngx-one-column-layout> 
`,
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  menu: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/client',
      home: true,
    },];

}
