import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {venta} from "../models/venta.model";

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  url:string='http://localhost:3000/ventas';
  clienteSelected: venta | undefined=undefined;
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(this.url);
  }
  save(venta:venta){
    this.http.post(this.url, venta).subscribe(res=>{
      console.log('Agregado correctamente:',res);

    })
  }
}
