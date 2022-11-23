import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionTelefonoComponent } from './confirmacion-telefono.component';

describe('ConfirmacionTelefonoComponent', () => {
  let component: ConfirmacionTelefonoComponent;
  let fixture: ComponentFixture<ConfirmacionTelefonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionTelefonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
