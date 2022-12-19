import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ScriptRegistroService} from "../service/script-registro.service";

import {HttpClient} from "@angular/common/http";
import {ToastController} from "@ionic/angular";
import {ClienteService} from "../service/cliente.service";

@Component({
  selector: 'app-vendedor-registro',
  templateUrl: './vendedor-registro.page.html',
  styleUrls: ['./vendedor-registro.page.scss'],
})
export class VendedorRegistroPage implements OnInit {
  registro: FormGroup = new FormGroup({});
  public persona: any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _CargaScripts: ScriptRegistroService,
              private clienteService: ClienteService,
              private toastController: ToastController,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.initRegistro();
  }

  initRegistro() {
    this.registro = this.fb.group({
      id: [null],
      Nombre: [''],
      ApellidoPaterno: [''],
      ApellidoMaterno: [''],
      DNI: [''],
      Email: [''],
      Celular: [''],
      Contrasena: [''],
      Estado: ['A'],
      Rol: ['V']
    })
  }

  cancel() {
    this.router.navigate(['listado-vendedor'])
  }

  confirm() {
    console.log('Datos Clientes', this.registro.value);
    this.clienteService.save(this.registro.value)
    this.presentToast();
    this.router.navigate(['listado-vendedor'])

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Vendedor Registrado con exito...!!!' + 'No se olvide refrescar',
      duration: 1500,
      icon: 'globe'
    });

    await toast.present();
    this.Refrescar();
  }
  async Refrescar() {
    window.location.reload();
    };


  navegateListadoVendedor(){
    this.router.navigate(['listado-vendedor'])
  }
}
