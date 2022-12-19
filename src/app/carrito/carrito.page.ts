import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CardItem} from "../models/card-item.model";
import {CartService} from "../service/cart.service";
import {ServiceRepuestoService} from "../service/service-repuesto.service";
import {Router} from "@angular/router";
import {VentaService} from "../service/venta.service.service";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {
  constructor() {
    this.obtenerLocalStorage();
  }

  ngOnInit(): void {

  }

obtenerLocalStorage(){
  for(let i = 0;i <= 20;i++){
    let motoLocal = localStorage.getItem("number"+i);
    console.log(motoLocal);
  }
}
}
