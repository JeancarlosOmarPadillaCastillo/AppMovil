import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'auth-screen',
    pathMatch: 'full'
  },
  {
    path: 'detallemotos/:id',
    loadChildren: () => import('./detallemotos/detallemotos.module').then( m => m.DetallemotosPageModule)
  },
  {
    path: 'detallerepuestos/:id',
    loadChildren: () => import('./detallerepuestos/detallerepuestos.module').then( m => m.DetallerepuestosPageModule)
  },
  {
    path: 'listado-vendedor',
    loadChildren: () => import('./listado-vendedor/listado-vendedor.module').then( m => m.ListadoVendedorPageModule)
  },
  {
    path: 'vendedor-registro',
    loadChildren: () => import('./vendedor-registro/vendedor-registro.module').then( m => m.VendedorRegistroPageModule)
  },
  {
    path: 'motos-registro',
    loadChildren: () => import('./motos-registro/motos-registro.module').then( m => m.MotosRegistroPageModule)
  },
  {
    path: 'repuestos-registro',
    loadChildren: () => import('./repuestos-registro/repuestos-registro.module').then( m => m.RepuestosRegistroPageModule)
  },
  {
    path: 'auth-screen',
    loadChildren: () => import('./auth-screen/auth-screen.module').then( m => m.AuthScreenPageModule)
  },
  {
    path: 'motos2',
    loadChildren: () => import('./motos2/motos2.module').then( m => m.Motos2PageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'listado-motos',
    loadChildren: () => import('./listado-motos/listado-motos.module').then( m => m.ListadoMotosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
