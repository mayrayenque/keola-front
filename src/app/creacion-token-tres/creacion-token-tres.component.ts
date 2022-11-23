import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-token-tres',
  templateUrl: './creacion-token-tres.component.html',
  styleUrls: ['./creacion-token-tres.component.scss'],
})
export class CreacionTokenTresComponent implements OnInit {
  token: string = '';

  constructor() {}

  ngOnInit(): void {}

  agregarDigito(digito: string) {
    this.token = this.token + digito;
  }

  eliminarDigito() {
    this.token = this.token.substring(0, this.token.length - 1);
  }

  limpiarToken() {
    this.token = '';
  }
}
