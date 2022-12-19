import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ToastController} from "@ionic/angular";
import {MotoService} from "../service/moto.service";
import {moto} from "../models/moto.model";

@Component({
  selector: 'app-listado-motos',
  templateUrl: './listado-motos.page.html',
  styleUrls: ['./listado-motos.page.scss'],
})
export class ListadoMotosPage implements OnInit {
  motos:any[]=[];
  searchMotos:any;
  constructor(private motoServices: MotoService,
              private router: Router,
              private http:HttpClient,
              private toastController: ToastController) { }

      ngOnInit(): void {

      this.findAll();

    }

    findAll(){
      this.motoServices.findAll().subscribe((res:any)=>{

          console.log(res);
          this.motos=res;
          this.searchMotos= this.searchMotos;

      })
  }

  searchCustomer( event: any) {
    const text = event.target.value;
    this.searchMotos = this.motos;
    if (text && text.trim() != '') {
      this.searchMotos = this.searchMotos.filter((motos: any) => {
        return (motos.categoria.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

  editarMoto(moto: moto){
    this.motoServices.motoSelected=moto;
    this.navigateMotosRegistro();
    this.findAll();
  }

  eliminarMoto(id:number){
    this.motoServices.delete(id).subscribe((res:any)=> {
      console.log('Se eliminó corectamente', res);
      this.findAll();
    })
  }
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

}
