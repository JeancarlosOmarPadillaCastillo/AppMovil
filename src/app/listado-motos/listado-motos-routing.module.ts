import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoMotosPage } from './listado-motos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoMotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoMotosPageRoutingModule {}
