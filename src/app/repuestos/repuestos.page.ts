import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServiceRepuestoService} from "../service/service-repuesto.service";

@Component({
  selector: 'app-repuestos',
  templateUrl: './repuestos.page.html',
  styleUrls: ['./repuestos.page.scss'],
})
export class RepuestosPage implements OnInit {

  repuestos:any[]=[];
  searchRepuestos:any;
  constructor(private repuestoServices: ServiceRepuestoService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.repuestoServices.findAll().subscribe((res:any)=>{
      console.log(res);
      this.repuestos=res;
      this.searchRepuestos = this.repuestos;
    } )
  }

  searchCustomer( event: any) {
    const text = event.target.value;
    this.searchRepuestos = this.repuestos;
    if (text && text.trim() != '') {
      this.searchRepuestos = this.searchRepuestos.filter((repuestos: any) => {
        return (repuestos.nombre.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }
  navigateform(){
    this.router.navigate(['motos']);
  }
  navigateRepuestos(){
    this.router.navigate(['repuestos']);
  }
  navigateLogin(){
    this.router.navigate(['login']);
  }
}
