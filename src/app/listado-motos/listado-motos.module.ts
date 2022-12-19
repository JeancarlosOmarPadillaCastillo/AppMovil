import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoMotosPageRoutingModule } from './listado-motos-routing.module';

import { ListadoMotosPage } from './listado-motos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoMotosPageRoutingModule
  ],
  declarations: [ListadoMotosPage]
})
export class ListadoMotosPageModule {}
