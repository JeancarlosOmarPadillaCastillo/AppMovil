import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallemotosPageRoutingModule } from './detallemotos-routing.module';

import { DetallemotosPage } from './detallemotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallemotosPageRoutingModule
  ],
  declarations: [DetallemotosPage]
})
export class DetallemotosPageModule {}
