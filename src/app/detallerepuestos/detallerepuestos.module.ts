import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallerepuestosPageRoutingModule } from './detallerepuestos-routing.module';

import { DetallerepuestosPage } from './detallerepuestos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallerepuestosPageRoutingModule
  ],
  declarations: [DetallerepuestosPage]
})
export class DetallerepuestosPageModule {}
