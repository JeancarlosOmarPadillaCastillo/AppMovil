import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {ScriptRegistroService} from "../../service/script-registro.service";

import {HttpClient} from "@angular/common/http";
import {ReniecService} from "../../service/reniec.service";
import {ClienteService} from "../../service/cliente.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registro:FormGroup= new FormGroup({});
  public persona:any;
  type = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _CargaScripts:ScriptRegistroService,
              private clienteService: ClienteService,
              private http: HttpClient,
              private toastController: ToastController,
              private sSunat: ReniecService) {

  }


  ngOnInit(): void {
    this.initRegistro();
  }
  initRegistro(){
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
      Rol: ['C']
    })
  }
  async saveCliente(){
    console.log('Datos Clientes', this.registro.value);
    this.clienteService.save(this.registro.value)
    this.registro.reset();
    this.router.navigate(['auth-screen']);
    this.presentToast();
  }
  changeType() {
    this.type = !this.type;
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cliente registrado con exito',
      duration: 1500,
      icon: 'globe'
    });

    await toast.present();
  }
}
