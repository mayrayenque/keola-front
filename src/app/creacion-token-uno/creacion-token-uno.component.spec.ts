import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTokenUnoComponent } from './creacion-token-uno.component';

describe('CreacionTokenUnoComponent', () => {
  let component: CreacionTokenUnoComponent;
  let fixture: ComponentFixture<CreacionTokenUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionTokenUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionTokenUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
