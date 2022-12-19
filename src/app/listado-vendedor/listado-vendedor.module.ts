import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoVendedorPageRoutingModule } from './listado-vendedor-routing.module';

import { ListadoVendedorPage } from './listado-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoVendedorPageRoutingModule
  ],
  declarations: [ListadoVendedorPage]
})
export class ListadoVendedorPageModule {}
