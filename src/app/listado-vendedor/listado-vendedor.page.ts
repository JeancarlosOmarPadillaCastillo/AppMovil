import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ClienteService} from "../service/cliente.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-listado-vendedor',
  templateUrl: './listado-vendedor.page.html',
  styleUrls: ['./listado-vendedor.page.scss'],
})
export class ListadoVendedorPage implements OnInit {
  vendedores:any[]=[];
  searchVendedor:any;
  constructor(private vendedorServices: ClienteService,
              private router: Router,
              private http:HttpClient,
              private toastController: ToastController) { }

  ngOnInit(): void {

    this.findAll();

  }

  findAll(){
    this.vendedorServices.findAll().subscribe((res:any)=>{

      const user= res[0];
      if (user.Rol=='V'){
        console.log(res);
        this.vendedores=res;
        this.searchVendedor= this.vendedores;
      }

    } )
  }
  searchCustomer( event: any){
    const text = event.target.value;
    this.searchVendedor= this.vendedores;
    if(text && text.trim() != ''){
      this.searchVendedor = this.searchVendedor.filter((vendedor :any)=>{
        return(vendedor.Nombre.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

  async Refrescar() {
    window.location.reload();
  };


  navigateLogin(){
    this.router.navigate(['login']);
  }
  navigateListado(){
    this.router.navigate(['listado-vendedor']);
  }
  navigateVendedorForm(){
    this.router.navigate(['vendedor-registro']);
  }
  navigateMotosRegistro(){
    this.router.navigate(['motos-registro']);
  }
  navigateRepuestosRegistro(){
    this.router.navigate(['repuestos-registro']);
  }
  navigateListadoMotos(){
    this.router.navigate(['listado-motos']);
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
