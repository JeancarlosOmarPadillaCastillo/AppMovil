import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallerepuestosPage } from './detallerepuestos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallerepuestosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallerepuestosPageRoutingModule {}
