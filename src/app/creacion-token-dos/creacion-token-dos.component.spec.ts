import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTokenDosComponent } from './creacion-token-dos.component';

describe('CreacionTokenDosComponent', () => {
  let component: CreacionTokenDosComponent;
  let fixture: ComponentFixture<CreacionTokenDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionTokenDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionTokenDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
