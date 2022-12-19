import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../service/cliente.service";
import {cliente} from "../models/cliente.model";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }
  editarCliente(cliente:cliente) {
    this.clienteService.clienteSelected = cliente;
  }
}
