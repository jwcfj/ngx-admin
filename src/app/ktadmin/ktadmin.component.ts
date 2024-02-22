import { Component } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'ngx-ktadmin',
  templateUrl: './ktadmin.component.html',
  styleUrls: ['./ktadmin.component.scss']
})
export class KtadminComponent {
  menu = MENU_ITEMS;
}
