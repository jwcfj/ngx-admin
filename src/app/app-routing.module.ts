import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'ktadmin',loadChildren: () => import('./ktadmin/ktadmin.module').then(m => m.KtadminModule),
  },
  //{ path: 'client/formulario',loadChildren: () => import('./client/formulario/formulario.module').then(m => m.FormularioModule)},
  //{ path: 'client',loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
  { path: 'client',loadChildren: () => import('./client/client.module').then(m => m.ClientModule)},
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  //{ path: 'path-string', loadChildren: () => import('./knowledge-transfer-admin/knowledge-transfer-admin.module').then(m => m.KnowledgeTransferAdminModule) },
  //{ path: 'path-string', loadChildren: () => import('./ktadmin/ktadmin.module').then(m => m.KtadminModule) },
  //{ path: '**', redirectTo: 'client' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
