import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionCirugiaComponent } from './cotizacion-cirugia.component';

describe('CotizacionCirugiaComponent', () => {
  let component: CotizacionCirugiaComponent;
  let fixture: ComponentFixture<CotizacionCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
