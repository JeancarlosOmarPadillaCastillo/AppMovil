import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReniecService {

  constructor(
    private http: HttpClient
  ) { }
  buscarDni(_dni: string): Observable<any>{
    let data = {
      dni: _dni
    };
    let api_token = "3b4d3669b4d69db33d63dbb6c10d9e4e3ac7adb2d960c0b19bc5446595f53ad0";

    let url = "https://apiperu.dev/api/dni/" + _dni + "?api_token=" + api_token;

    return this.http.get(url);
  }
}
