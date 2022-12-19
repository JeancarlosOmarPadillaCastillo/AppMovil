import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {repuesto} from "../models/repuesto.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceRepuestoService {
  url:string='http://localhost:3000/repuestos';
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(this.url);
  }
  save(repuesto: repuesto){
    this.http.post(this.url, repuesto).subscribe(res=>{
      console.log('Resultado:',res);

    })
  }
}
