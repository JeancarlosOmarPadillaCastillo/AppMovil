import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceRepuestoService} from "../service/service-repuesto.service";
@Component({
  selector: 'app-detallerepuestos',
  templateUrl: './detallerepuestos.page.html',
  styleUrls: ['./detallerepuestos.page.scss'],
})
export class DetallerepuestosPage implements OnInit {
  repuestos:any[]=[];
  finalId: number=0;
  id:any;
  nombre: string ='';
  marca: string ='';
  modelo: string ='';
  precioVenta: number=0;
  STOCK: number=0;
  estado: string ='';
  foto:string="";
  constructor(private activatedRoute:ActivatedRoute,
              private router: Router,
              private repuestoService : ServiceRepuestoService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("id");
    this.finalId= this.id-1;
    console.log("id",this.id)
    this.findAll();
  }
  findAll(){
    this.repuestoService.findAll().subscribe((res:any)=>{
      console.log(res);
      this.repuestos=res;
      this.nombre=this.repuestos[this.finalId].nombre;
      this.marca=this.repuestos[this.finalId].marca;
      this.modelo=this.repuestos[this.finalId].modelo;
      this.precioVenta=this.repuestos[this.finalId].precioVenta;
      this.STOCK=this.repuestos[this.finalId].STOCK;
      this.estado=this.repuestos[this.finalId].estado;
      this.foto=this.repuestos[this.finalId].foto;
    } )
  }
  navegateRepuestos(){
    this.router.navigate(['repuestos'])
  }
}
