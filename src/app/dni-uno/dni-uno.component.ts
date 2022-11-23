import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dni-uno',
  templateUrl: './dni-uno.component.html',
  styleUrls: ['./dni-uno.component.scss'],
})
export class DniUnoComponent implements OnInit {
  @ViewChild('file') file!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  abrirImagen() {
    this.file.nativeElement.click();
  }
}
