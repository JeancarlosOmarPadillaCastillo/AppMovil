import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Motos2Page } from './motos2.page';

const routes: Routes = [
  {
    path: '',
    component: Motos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Motos2PageRoutingModule {}
