import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTokenTresComponent } from './creacion-token-tres.component';

describe('CreacionTokenTresComponent', () => {
  let component: CreacionTokenTresComponent;
  let fixture: ComponentFixture<CreacionTokenTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionTokenTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionTokenTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
