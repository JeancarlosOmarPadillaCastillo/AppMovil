import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path: 'motos2',
        loadChildren: () => import('./../motos2/motos2.module').then( m => m.Motos2PageModule)
      },
      {
        path: 'repuestos',
        loadChildren: () => import('./../repuestos/repuestos.module').then( m => m.RepuestosPageModule)
      },
      {
        path: '',
        redirectTo: 'motos2',
        pathMatch: 'full'
      },
      {
        path: 'carrito',
        loadChildren: () => import('./../carrito/carrito.module').then( m => m.CarritoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../perfil/perfil.module').then( m => m.PerfilPageModule)
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
