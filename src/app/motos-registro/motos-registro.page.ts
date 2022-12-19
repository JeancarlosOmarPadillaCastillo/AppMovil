import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ScriptRegistroService} from "../service/script-registro.service";
import {HttpClient} from "@angular/common/http";
import {MotoService} from "../service/moto.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-motos-registro',
  templateUrl: './motos-registro.page.html',
  styleUrls: ['./motos-registro.page.scss'],
})
export class MotosRegistroPage implements OnInit, OnDestroy{
  registro:FormGroup= new FormGroup({});
  public persona:any;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _CargaScripts:ScriptRegistroService,
              public motoService: MotoService,
              private toastController: ToastController,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.initRegistro();
  }

  initRegistro(){
      this.registro = this.fb.group({
      id:[null],
      categoria: [''],
      marca: [''],
      modelo: [''],
      color: [''],
      precioCompra: [''],
      precioVenta: [''],
      garantia: [''],
      STOCK: [''],
      estado: ['A'],
    });
      if(this.motoService.motoSelected){
        this.registro.patchValue(this.motoService.motoSelected);
      }
  }

  async saveCliente(){
    if(this.motoService.motoSelected) {
      this.updatemotos()
    }else{
      this.createMoto()
    }
    }

  createMoto(){
    console.log('Datos Clientes', this.registro.value);
    this.motoService.save(this.registro.value);
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
  navigateListadoMotos(){
    this.router.navigate(['listado-motos']);
  }

  ngOnDestroy() {
    this.motoService.motoSelected=undefined;
  }

  async updatemotos(){
    console.log('Se guardo correctamente', this.registro.value);
    this.motoService.editar(this.registro.value);
    this.registro.reset();
  }
}
