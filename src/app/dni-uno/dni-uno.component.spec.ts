import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DniUnoComponent } from './dni-uno.component';

describe('DniUnoComponent', () => {
  let component: DniUnoComponent;
  let fixture: ComponentFixture<DniUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DniUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DniUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
