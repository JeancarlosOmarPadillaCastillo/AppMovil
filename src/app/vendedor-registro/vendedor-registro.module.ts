import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorRegistroPageRoutingModule } from './vendedor-registro-routing.module';

import { VendedorRegistroPage } from './vendedor-registro.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VendedorRegistroPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [VendedorRegistroPage]
})
export class VendedorRegistroPageModule {}
