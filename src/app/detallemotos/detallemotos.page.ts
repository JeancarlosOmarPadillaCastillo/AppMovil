import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MotoService} from "../service/moto.service";
import {map} from "rxjs/operators";
import {CardItem} from "../models/card-item.model";
import {CartService} from "../service/cart.service";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-detallemotos',
  templateUrl: './detallemotos.page.html',
  styleUrls: ['./detallemotos.page.scss'],
})
export class DetallemotosPage implements OnInit {
  motos:any[]=[];
  id:any;
  finalId: number=0;
  modelo: string ="";
  categoria: string ="";
  marca: string ="";
  color: string ="";
  precioVenta: string ="";
  garantia: string ="";
  STOCK: string ="";
  estado: string ="";
  foto: string ="";
  descripcion: string ="";
  quantity:number=0;
  motoLocal:any[]=[];
  motoFor:number=0;
  constructor(private activatedRoute:ActivatedRoute,
              private router: Router,
              private motoServices: MotoService,
              private cartService:CartService,
              private toastController: ToastController) {

  }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId= this.id-1;
    console.log("id",this.id)

    this.findAll();
  }
  findAll(){
    this.motoServices.findAll().subscribe((res:any)=>{
      console.log(res);
      this.motos=res;
      this.categoria=this.motos[this.finalId].categoria;
      this.marca=this.motos[this.finalId].marca;
      this.modelo=this.motos[this.finalId].modelo;
      this.color=this.motos[this.finalId].color;
      this.precioVenta=this.motos[this.finalId].precioVenta;
      this.garantia=this.motos[this.finalId].garantia;
      this.STOCK=this.motos[this.finalId].STOCK;
      this.estado=this.motos[this.finalId].estado;
      this.foto=this.motos[this.finalId].foto;
      this.descripcion=this.motos[this.finalId].descripcion;
    } )
    this.quantity=1;

  }


  anadirCarrito(){

    let motoLocal={
      nombre:this.categoria,
      modelo:this.modelo,
      marca:this.marca,
      precio:this.precioVenta,

    }

      localStorage.setItem("number"+this.id, JSON.stringify(motoLocal));
    }










  async presentToast() {
    const toast = await this.toastController.create({
      message: 'producto agregado exitosamente!',
      duration: 1500,
    });

    await toast.present();
  }
  }

