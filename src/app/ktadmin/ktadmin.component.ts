import { Component } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'ngx-ktadmin',
  template:`<ngx-one-column-layout>
  <nb-menu [items]="menu"></nb-menu>
  <router-outlet></router-outlet>
</ngx-one-column-layout>`,
  styleUrls: ['./ktadmin.component.scss']
})
export class KtadminComponent {
  menu = MENU_ITEMS;
}
