import { Component, OnInit } from '@angular/core';
import {MotoService} from "../service/moto.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-motos2',
  templateUrl: './motos2.page.html',
  styleUrls: ['./motos2.page.scss'],
})
export class Motos2Page implements OnInit {

  motos:any[]=[];
  searchMotos:any;
  constructor(private motoServices: MotoService,
              private router: Router,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.findAll();

  }

  findAll(){
    this.motoServices.findAll().subscribe((res:any)=>{
      console.log(res);
      this.motos=res;
      this.searchMotos= this.motos;
    } )
  }

  searchCustomer( event: any){
    const text = event.target.value;
    this.searchMotos= this.motos;
    if(text && text.trim() != ''){
      this.searchMotos = this.searchMotos.filter((moto :any)=>{
        return(moto.marca.toLowerCase().indexOf(text.toLowerCase()) > -1);
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
