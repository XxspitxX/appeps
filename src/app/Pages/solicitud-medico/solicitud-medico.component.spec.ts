import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMedicoComponent } from './solicitud-medico.component';

describe('SolicitudMedicoComponent', () => {
  let component: SolicitudMedicoComponent;
  let fixture: ComponentFixture<SolicitudMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
