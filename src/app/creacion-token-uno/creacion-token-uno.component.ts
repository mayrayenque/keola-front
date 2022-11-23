import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-token-uno',
  templateUrl: './creacion-token-uno.component.html',
  styleUrls: ['./creacion-token-uno.component.scss'],
})
export class CreacionTokenUnoComponent implements OnInit {
  token: string = '';
  token1: string = '';

  constructor() {}

  ngOnInit(): void {}

  agregarDigito(digito: string) {
    this.token = this.token + digito;
  }

  repetirDigito(digito: string) {
    this.token1 = this.token1 + digito;
  }

  eliminarDigito() {
    this.token = this.token.substring(0, this.token.length - 1);
  }

  limpiarToken() {
    this.token = '';
  }

  eliminarDigito1() {
    this.token1 = this.token1.substring(0, this.token1.length - 1);
  }

  limpiarToken1() {
    this.token1 = '';
  }
}
