import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelTigeraComponent } from './piedra-papel-tigera.component';

describe('PiedraPapelTigeraComponent', () => {
  let component: PiedraPapelTigeraComponent;
  let fixture: ComponentFixture<PiedraPapelTigeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelTigeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelTigeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
