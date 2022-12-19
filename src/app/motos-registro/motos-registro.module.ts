import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosRegistroPageRoutingModule } from './motos-registro-routing.module';

import { MotosRegistroPage } from './motos-registro.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MotosRegistroPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [MotosRegistroPage]
})
export class MotosRegistroPageModule {}
