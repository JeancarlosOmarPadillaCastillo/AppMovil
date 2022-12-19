import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoVendedorPage } from './listado-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoVendedorPageRoutingModule {}
