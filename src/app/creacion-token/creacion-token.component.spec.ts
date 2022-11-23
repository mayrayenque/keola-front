import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTokenComponent } from './creacion-token.component';

describe('CreacionTokenComponent', () => {
  let component: CreacionTokenComponent;
  let fixture: ComponentFixture<CreacionTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
