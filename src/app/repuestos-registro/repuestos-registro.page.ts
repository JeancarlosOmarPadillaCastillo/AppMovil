import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ScriptRegistroService} from "../service/script-registro.service";
import {MotoService} from "../service/moto.service";
import {HttpClient} from "@angular/common/http";
import {ServiceRepuestoService} from "../service/service-repuesto.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-repuestos-registro',
  templateUrl: './repuestos-registro.page.html',
  styleUrls: ['./repuestos-registro.page.scss'],
})
export class RepuestosRegistroPage implements OnInit {

  registro:FormGroup= new FormGroup({});
  public persona:any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _CargaScripts:ScriptRegistroService,
              private repuestoService: ServiceRepuestoService,
              private toastController: ToastController,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.initRegistro();
  }

  initRegistro(){
    this.registro = this.fb.group({
      id:[null],
      nombre: [''],
      marca: [''],
      modelo: [''],
      precioCompra: [''],
      precioVenta: [''],
      STOCK: [''],
      estado: ['A'],
    })
  }

  async saveCliente(){
    console.log('Datos Clientes', this.registro.value);
    this.repuestoService.save(this.registro.value);
    this.presentToast();

  }
  async Refrescar() {
    window.location.reload();
  };

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Moto Registrado con exito...!!!' + 'No se olvide refrescar',
      duration: 1500,
      icon: 'globe'
    });

    await toast.present();
    this.Refrescar();
  }

  navigateListado(){
    this.router.navigate(['listado-vendedor']);
  }
  navigateMotosRegistro(){
    this.router.navigate(['motos-registro']);
  }
  navigateRepuestosRegistro(){
    this.router.navigate(['repuestos-registro']);
  }
  navigateLogin(){
    this.router.navigate(['login']);
  }
}
