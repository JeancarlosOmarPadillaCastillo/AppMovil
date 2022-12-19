import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url:string='http://localhost:3000/empleados';
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(this.url);
  }
}
