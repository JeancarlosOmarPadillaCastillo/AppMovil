import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {moto} from "../models/moto.model";
@Injectable({
  providedIn: 'root'
})
export class MotoService {
  url: string = 'http://localhost:3000/motos';

  motoSelected: moto | undefined = undefined;

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get(this.url);
  }

  save(moto: moto) {
    return this.http.post(this.url, moto).subscribe(res => {
      console.log('Resultado:', res);

    })
  }

  editar(moto: moto) {
    return this.http.put(this.url, moto).subscribe(res => {
      console.log('Resultado:', res);

    })
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`);
  }
}

