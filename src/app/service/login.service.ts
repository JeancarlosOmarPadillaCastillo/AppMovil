import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Any = jasmine.Any;
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(DNI: Any): Observable<any> {
    return this.http.post("http://localhost:3000/clientes", DNI);
    return this.http.post("http://localhost:3000/empleados", DNI);
  }
}
