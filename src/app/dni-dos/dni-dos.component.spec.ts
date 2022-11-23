import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniDosComponent } from './dni-dos.component';

describe('DniDosComponent', () => {
  let component: DniDosComponent;
  let fixture: ComponentFixture<DniDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DniDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DniDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
