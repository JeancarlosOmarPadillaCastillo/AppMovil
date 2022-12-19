import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginDto} from "../dtos/login.dto";
import {environment} from "../../environments/environment";
import {ClienteDto} from "../dtos/cliente.dto";
import {EmpleadoDto} from "../dtos/empleado.dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  auth(login: LoginDto){
    return this.http.post<ClienteDto[]>(`${environment.apiUrl}/auth/login`,login);
  }
  getUid(){

  }
}
