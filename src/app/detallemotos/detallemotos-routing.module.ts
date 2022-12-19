import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallemotosPage } from './detallemotos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallemotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallemotosPageRoutingModule {}
