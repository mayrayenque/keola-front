import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dni-dos',
  templateUrl: './dni-dos.component.html',
  styleUrls: ['./dni-dos.component.scss'],
})
export class DniDosComponent implements OnInit {
  @ViewChild('file1') file1!: ElementRef;
  @ViewChild('file1') file2!: ElementRef;

  constructor() {}

  ngOnInit(): void {}
  subirAnverso() {
    this.file1.nativeElement.click();
  }

  subirReverso() {
    this.file1.nativeElement.click();
  }
}
