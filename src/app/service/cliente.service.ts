import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {cliente} from "../models/cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url:string='http://localhost:3000/clientes';
  clienteSelected: cliente | undefined=undefined;
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(this.url);
  }
  save(cliente:cliente){
    this.http.post(this.url, cliente).subscribe(res=>{
      console.log('Resultado:',res);

    })
  }
}
