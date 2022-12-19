import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepuestosRegistroPageRoutingModule } from './repuestos-registro-routing.module';

import { RepuestosRegistroPage } from './repuestos-registro.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RepuestosRegistroPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [RepuestosRegistroPage]
})
export class RepuestosRegistroPageModule {}
