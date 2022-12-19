import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../service/cliente.service";
import {cliente} from "../models/cliente.model";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }
  editarCliente(cliente:cliente){
this.clienteService.clienteSelected=cliente;

  }
}
