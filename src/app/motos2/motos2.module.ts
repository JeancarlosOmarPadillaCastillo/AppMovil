import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Motos2PageRoutingModule } from './motos2-routing.module';

import { Motos2Page } from './motos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Motos2PageRoutingModule
  ],
  declarations: [Motos2Page]
})
export class Motos2PageModule {}
