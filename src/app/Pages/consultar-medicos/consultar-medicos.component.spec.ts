import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMedicosComponent } from './consultar-medicos.component';

describe('ConsultarMedicosComponent', () => {
  let component: ConsultarMedicosComponent;
  let fixture: ComponentFixture<ConsultarMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
