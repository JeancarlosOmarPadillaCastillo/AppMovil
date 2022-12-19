import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepuestosRegistroPage } from './repuestos-registro.page';

const routes: Routes = [
  {
    path: '',
    component: RepuestosRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepuestosRegistroPageRoutingModule {}
